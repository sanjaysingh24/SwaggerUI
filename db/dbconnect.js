import mongoose from "mongoose";


export const connectDb = async()=>{
    try{
     const conn = await mongoose.connect('mongodb://localhost:27017/swaggerdb')
     if(conn){
        console.log("DB connected successfully");

     }
     else{
        console.log("DB connection failed");
     }
    }catch(err){
        console.log("DB connection error", err);

    }
}
connectDb();