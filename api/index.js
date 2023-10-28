import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()

mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log('Connected to MongoDB');
}).catch((error)=>{
    console.log(error)
})


const app = express();

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`); 
});