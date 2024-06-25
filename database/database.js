import mongoose  from "mongoose";
import evn from "dotenv"

//config is a command to search the "env" file in the local directory
evn.config();

//async should added before  the function
 export const connnect = async()=>{
  try {
//await is the command to be added before the prosses 
    await mongoose.connect(process.env.key);
    //to conform the connection 
   console.log(" data base connected");
} catch (error) {
    console.error(error.message);
    //to exit the program
    process.exit(1);
  }
 } ;