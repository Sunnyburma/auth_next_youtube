//import { verify } from "crypto";
import mongoose, { model } from "mongoose";
//import { unique } from "next/dist/build/utils";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required: [true, "Please provide a username"],
        unique:true,
    },
    email:{
        type:String,
        required:[true,"Please provide a email"],
        unique:true,
    },
    password:{
        type:String,
        required:[true,"please provide a password"],

    },
    isVeried:{
        type:Boolean,
        default:false,
    },
    isAdmin:{
        type:Boolean,
        default:false,

    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,


})
const User = mongoose.models.users || mongoose.model("users",userSchema);

export default User;