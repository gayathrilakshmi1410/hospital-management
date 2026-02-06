import express from 'express';
import dotenv from 'dotenv';
import 'colors'
import morgan from 'morgan';
import cors from 'cors';
import testRoutes from './routes/testRoutes.js';
import connectDB from './config/db.js';



//coning env var
dotenv.config();

//database
connectDB();

//test object
const app=express()

//middleware
app.use(express.json())
app.use(cors());
app.use(morgan("dev"))



//routes
app.use('/api/v1/test',testRoutes)
app.get('/',(req,res)=>[
    res.send('<h1>Node Server Running</h1>')
]);


//port
const PORT=process.env.PORT || 5000;

//run server
app.listen(PORT,()=>{
    console.log(`Node server running in ${process.env.NODE_ENV} mode on port ${PORT}`.bgCyan.white)
})