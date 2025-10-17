// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";

// require('dotenv').config({path: './env'})


/*
cac
import express from "express"
const app = express()

;(async()=>{
  try{
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    app.on("error",()=>{
      console.log("ERRR",error);
      throw error;
    })

    app.listen(process.env.PORT,()=>{
      console.log(`App is listening on port ${process.env.PORT}`)
    })

  }catch(error){
    console.error("ERROR: ",error)
    throw err
  }
 })*/

import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config({
  path: './env'
})

connectDB()
.then(()=>{
  app.listen(process.env.PORT || 8000,()=>{
    console.log(`Server is running at port: ${process.env.PORT}`);
  })
})
.catch((err)=>{
  console.log("MONGO db connection failed !!!",err);
})




