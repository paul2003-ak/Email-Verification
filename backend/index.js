const express=require ("express");
const dotenv=require("dotenv")
dotenv.config();
const connectToDb=require('./db/db')
const PORT=process.env.PORT || 4000

const userregistration=require('./routes/authroutes')

const app=express();
app.use(express.json())
connectToDb()

app.use('/users',userregistration)


app.listen(PORT,()=>{
    console.log(`app is running on ${PORT}`)
})