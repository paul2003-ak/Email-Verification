const usermodel = require("../models/user.model");
const bcrypt=require("bcrypt")
const userservice=require("../services/user.service");
const sendemail  = require("../middleware/email");

//register
module.exports.registerUser=async(req,res,next)=>{
    try{
        const{email,password,fullname}=req.body

        const userexist=await usermodel.findOne({email});
        if(userexist){
            return res.status(501).json({message:"User is Already Exist"});
        }
        const hashpass=await bcrypt.hash(password,10)
        const verificationToken=Math.floor(100000+Math.random()*900000).toString()//make a random code 
        const user=await userservice.createUser({
            email,
            password:hashpass,
            fullname,
            verificationcode:verificationToken
        })
        //for send verification
        await sendemail.sendverificationcode(user.email,verificationToken)

        res.status(201).json({user})

    }catch(error){
        console.log(error)
        return res.status(400).json({message:"internal server error"});
    }
}

//verifyemail
module.exports.veryfyemail=async(req,res)=>{
    try{
        const {code}=req.body//which code type user in his phone we search that code in usermodel 
        const user=await usermodel.findOne({
            verificationcode:code
        })
        if(!user){
            return res.status(400).json({message:"Invalid or Expire code"});
        }
        //if the code is correct soo what...
        user.isverified=true;//in usermodel

        user.verificationcode=undefined;
        await user.save()

        await sendemail.wellcomeemail(user.email,user.fullname)
        return res.status(200).json({message:"its Working ...."});

    }catch(error){
        console.log(error)
        return res.status(500).json({message:"internal server error"});
    }
}