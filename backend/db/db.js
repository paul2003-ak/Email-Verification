const mongoose=require('mongoose')


const Dbconnection=async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL
        ).then(()=>{
            console.log("connect to mongodb");
        })
    }catch(error){
        console.log('Mongodb connection error',error)
    }
}

module.exports=Dbconnection