const express=require('express')
const router=express.Router();
const usercontroller=require('../controllers/user.controller')

router.post('/register',usercontroller.registerUser)

router.post('/verifyemail',usercontroller.veryfyemail)

module.exports=router