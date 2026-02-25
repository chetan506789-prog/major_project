
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectdata= async()=>{
      
    try{
         const dataresponse= await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
         console.log("DATABASE CONNECTED SUCCESFULLY");
         console.log(dataresponse.connection.host);
    }
    catch(error){
          console.log("MONGODB CONNECTION FAILED:",error );
          process.exit(1);
    }
}

export default connectdata