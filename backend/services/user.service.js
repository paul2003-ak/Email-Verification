//this is for create new user in mongo

const usermodel = require("../models/user.model");

module.exports.createUser=async({
    fullname,
    email,
    password,
    verificationcode
})=>{
    if(!fullname || !email || !password){
        throw new Error('All fieldis required');
    }
    const user=usermodel.create({
        fullname,
        email,
        password,
        verificationcode
    })

    return user;
}