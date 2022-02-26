const express=require("express");
const app=express();
const connectDB=require('./config/ConnectDB')
const userRoute=require('./routes/userRouter')
const router=require('./routes/userRouter')
app.use(express.json());
app.use('/user',userRoute)
require('dotenv').config({path:'./config/.env'})
const port =7000||process.env.PORT 
connectDB();
app.listen(port,()=>{
console.log(`The server is running on port ${port}`)
})
app.use('/',router)
console.log(process.env.PORT)