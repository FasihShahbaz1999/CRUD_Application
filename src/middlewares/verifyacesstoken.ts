import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';

const verifyAccessToken = (req: Request, res: Response, next: NextFunction) => {
  const accessToken = req.headers.authorization?.split(" ")[1];

  try {
    const decodedClaims = jwt.verify(accessToken!, process.env.ACCESS_SECRET!);
    console.log(decodedClaims);
    return next();    
  } catch (error) {
    return res.status(500).json(error)    
  }
};


export default verifyAccessToken;