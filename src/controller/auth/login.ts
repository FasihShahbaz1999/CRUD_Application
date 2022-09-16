import { Request,Response } from "express";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import Users from "../../models/user";

const loginController= async (req:Request,res:Response) => {
    const {email,password}=req.body;
    try {

        const existingUser= await Users.findOne({
            email,
        })

        console.log(existingUser);

        if(!existingUser)
        {
            return res.status(403).send("User does not exists")
        }
        
        const passwordMatched= await bcrypt.compare(password,existingUser.password)

        if(!passwordMatched)
        {
            return res.status(403).send("Password not matched");
        }



        const accessToken=jwt.sign({
            id:existingUser._id,
            email:existingUser.email
        },process.env.ACCESS_SECRET!,{

            expiresIn:'5m',
            issuer:"http://localhost:8080",
            subject:existingUser._id.toString(),


        })

        const refreshToken = jwt.sign({
          id: existingUser._id,
          email: existingUser.email,
           metadata: "apsiodjapsodjpaosjd"
        }, process.env.REFRESH_SECRET!, {
           expiresIn: "30d",
          issuer: "http://localhost:4000",
           subject: existingUser._id.toString(),
        });


        const updateUser= await Users.findByIdAndUpdate(existingUser._id,{
            $set:{
                refreshToken,
            }
        },{ new: true});

        console.log(updateUser);


        return res.json({
            message:"User Exists",
            data:updateUser,
            token:accessToken,
        });



    } catch (error) {

        console.log(error);
        
    }
    

}

export default loginController;