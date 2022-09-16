import { Request,Response } from "express";
import Books from "../../models/book";

const updateBook=async (req:Request,res:Response) => {
    const{id}=req.params;
    const {title,publisher,writer,edition}=req.body;
    try {

        const updateBooks= await Books.findByIdAndUpdate(id,req.body);
        
         if(!updateBooks)
        {
            return res.status(404).json({
                message:"Book not Found"
            })
        }
        
        return res.json({
            message:"Book Sucessfully Updated",
            data:updateBooks,
        })
        
    } catch (error) {
        return res.status(500).json(error);
        
    }
    
}
export default updateBook;