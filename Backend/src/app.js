import express from 'express'
import cors from 'cors'

const app=express();
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    methods:  ['GET','POST','PUT','DELETE','PATCH'],
    credentials: true
}));

//Import routes
import userRouter from './routes/submitform.routes.js'

//Routes Declaration
app.use('/api/v1/',userRouter);

export {app}