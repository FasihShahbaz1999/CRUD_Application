import {Request,Response } from "express";
import Books from "../../models/book";

const getABook=async (req:Request,res:Response) => {
    const{id}=req.params;
    try {
        const singleProduct=await Books.findById(id);

        if(!singleProduct)
        {
            return res.status(404).json({
                message:"Book not Found"
            })
        }
        
        return res.json({
            message:"Book Sucessfully Found",
            data:singleProduct,
        })
    } catch (error) {
        return res.status(500).json(error);
        
    }
    
}

export default getABook;