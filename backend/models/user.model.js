const mongoose= require('mongoose')


const userschema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    fullname:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    isverified:{
        type:Boolean,
        default:false,

    },
    verificationcode:{
        type:String,
    }
},{timestamps:true})

const usermodel=mongoose.model('user',userschema);
module.exports=usermodel;