//imported express,cors and cookie-parser
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
//created app with express
const app= express();
//configring cors and cookie-parser with app.use
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(cookieParser())

//configuring json and url data and public folder as well 
app.use(express.json({limit:"15kb"}))
app.use(express.urlencoded({limit:"15kb",extended:true}))
app.use(express.static("public"))

//exporting app
export { app }
