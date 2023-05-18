import express, { json } from "express";
import mongoose, { set, connect as _connect } from "mongoose";
//import mongoose from "mongoose";
import cors from "cors";
import { config } from "dotenv";
import cookieparser from "cookie-parser";
import usersRouter from "./routes/userRoute.js";
import tripRoute from "./routes/tripRoute.js";
//import  usersRouter from "./routes/userRoute.js";
//import Router from "./routes/userRoute.js";
//import router from "./routes/troute.js";
import reservationRouter from "./routes/reservationRoute.js"
import authenticationRouter from "./routes/authenticationRoute.js"

config();
const app = express();
const port = process.env.PORT || 8000; 

set("strictQuery", false);
const connect = async()=>{ 
    try{
        await connect("MONGO_URI")
         console.log('MongoDB database connected');
         //res.end();

    } catch(err) {
        console.log('MongoDB database connection failed');
        //res.end();

    }
};

app.use(json());
app.use(cors());
app.use(cookieparser());
app.use('/tripRoute', tripRoute);
app.use('/userRoute', usersRouter);
app.use("/reservationRoute", reservationRouter);
app.use("/authenticationRoute", authenticationRouter);
//try{
 //   throw new Error("checkout Code");
//}catch (err) {
 //   console.log(Error.message);
//}finally{
 //   console.log("I guess you should rest now");
//}

mongoose.connect(process.env.MONGO_URI).then(() => {
    app.listen(port, ()=>{
        console.log('server listening to port', port);
    });
})

app.get("/", (_req, res)=>{
    res.send("API is responding");
});





//module.exports = mongoose;