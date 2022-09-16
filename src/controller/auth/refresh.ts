import { Request,Response } from "express";
import jwt from 'jsonwebtoken';
import Users from "../../models/user";

const refreshController = async (req:Request, res:Response) => {
  const refreshToken = req.headers.authorization?.split(" ")[1];
  try {
    const decodedClaims: any = jwt.verify(refreshToken!, process.env.REFRESH_SECRET!);
    console.log(decodedClaims);

    const user = await Users.findById(decodedClaims.id)

    if (!user) {
      return res.status(404).json({
        message: "User with given ID does not exist"
      })
    }

    console.log(user.refreshToken);


    console.log(refreshToken)

    if (user.refreshToken != refreshToken) {
      return res.status(403).json({
        message: "invalid refresh token"
      });
    }

    const accessToken = jwt.sign({
      id: user._id,
      email: user.email
    }, process.env.ACCESS_SECRET!, {
      expiresIn: "5m",
      issuer: "http://localhost:4000",
      subject: user._id.toString(),
    });

    return res.json({
      message: "Access Token regenerated successfully",
      data: accessToken
    })
  } catch (error) {
    return res.status(500).json(error);    
  }
}

export default refreshController;