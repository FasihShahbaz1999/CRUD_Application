import { Request,Response } from "express";
import Books from "../../models/book";

const deleteBook=async (req:Request,res:Response) => {
    const{id}=req.params;
    try {
        const delBook= await Books.findByIdAndDelete(id)

        if(!delBook)
        {
            return res.status(404).json("Book not found");
        }

        return res.json({
            message:"Book Sucessfully Deleted ",
            data:delBook
        })


        
    } catch (error) {
        return res.status(500).json(error);

        
    }

    
    
}

export default deleteBook;