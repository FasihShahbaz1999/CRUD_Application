import dotenv from 'dotenv'
dotenv.config()

import express from 'express';

import mongoose from 'mongoose';

import authRouter from './routes/auth';

import bookRouter from './routes/book';

import verifyaccesstoken from './middlewares/verifyacesstoken'

const app= express();

const port=8080;

app.use(express.json())



app.use("/Auth",authRouter);

app.use(verifyaccesstoken);

app.use("/BookRouter",bookRouter);







mongoose.connect(process.env.MONGO_URI!)
 .then(() => {

    app.listen(port,()=>{
    console.log(`Server listening at http://localhost: ${port}`)
    })
})
.catch(err => {
    console.log(err);
})


    
 

