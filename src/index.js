import dotenv from "dotenv";
dotenv.config()

import { app } from "./app.js";

import connectdata from "./db/index.js";

connectdata()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`app is listening on port ${process.env.PORT}`)
    })
})
.catch((error)=>{
console.log("error:",error);
})