import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routes/userRoute.js'
import authRoute from './routes/authRoute.js';
import morgan from 'morgan';

dotenv.config() 

mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log('Connected to MongoDB');
}).catch((error)=>{
    console.log(error)
})


const app = express();
app.use(express.json())
app.use(morgan('dev'))

app.use((error, req, res, next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success:false,
        message,
        statusCode,
    })
})

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`); 
});

app.use('api/user', userRoute); 
app.use('/api/auth', authRoute); 
