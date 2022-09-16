import mongoose,{Schema} from "mongoose";

const bookSchema= new Schema({

    title:{
        type:String,
        required:true,
        maxlength:40,
        minlength:1
    },
    publisher:{
        type:String,
        requried:true,
        maxlength:40,
        minlength:2

    },
    edition:{
        type:String,
        requried:true,
        maxlength:3
    },
    writer:{
        type:String,
        requried:true,
        maxlength:40

    }
},{
    timestamps:true

})

const Books=mongoose.model("Books",bookSchema);

export default Books;