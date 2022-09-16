import { Request,Response } from "express";
import book from '../../models/book'


const getAllBooks=async (req:Request,res:Response) => {
    try {
        const getallBooks= await book.find();
        return res.json({
            message:"List of All Books ",
            data:getallBooks,
        })
        
    } catch (error) {
        return res.status(500).json(error);
        
    }

    
}

export default getAllBooks;