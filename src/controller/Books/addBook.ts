import { Request,Response } from "express";
import Books from "../../models/book";

const addBook=async (req:Request,res:Response) => {
    const {title,publisher,writer,edition} = req.body
    console.log(req.body);

    try {
        const newBook= await Books.create({
            title,
            publisher,
            writer,
            edition
        });
        return res.json({
             message:"Book Added Sucessfully",
             data:newBook,
        });
        


    } catch (error) {
        return res.status(403).json(error);
        
    }
    
}

export default addBook;