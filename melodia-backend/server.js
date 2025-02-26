import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import songRouter from './routes/songRoute.js';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import albumRouter from './routes/albumRoute.js';

//app config
const app=express();
const port=process.env.PORT || 4000;
connectDB();
connectCloudinary();


//middleware
app.use(express.json());
app.use(cors());

app.use("/api/song",songRouter);
app.use("/api/album",albumRouter);

//intializing api routes
app.get('/',(req,res)=>res.send("API Working"));

app.listen(port,()=>console.log(`Server is running on port ${port}`));


