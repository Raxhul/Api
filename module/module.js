import { Schema, model } from "mongoose";

// the tembleate
 const schema = new Schema({
    name :{
           type: String,
           required:true,
           // unique it refer's to the title should not repeted 
           unique:true
           
        },
         email :{
         type: String,
         required:true,
        },

         password:{
        type: String,
        required:true,
 },
 });

 //to use this timplate outside the folder 
 export const Movie =  model("User",schema)