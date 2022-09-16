import { Request,Response } from "express";
import bcrypt from 'bcrypt';
import Users from "../../models/user";

const signupController=async (req:Request,res:Response) => {

    const{email,password}=req.body;
    try {
        const hasedPassword= await bcrypt.hash(password,8);

        const newuser=await Users.create({
            email,
            password: hasedPassword
        });

        return res.json({
            message:"user created sucessfully",
            data:newuser
        })

    } catch (error) {
        
        console.log(error);
    }
    
}

export default signupController;