import mongoose,{Schema} from "mongoose";

const userSchema= new Schema({

    email:{
        type:String,
        required:true,
        unique:true,
        maxlength:50
    },
    password:{
        type:String,
        required:true,
        minlength:8,
    },
     refreshToken: {
    type: String,
    required: false,
    default: ""
  }

},{

    timestamps:true
})

const Users = mongoose.model("Users",userSchema);

export default Users;