import { Schema, model } from "mongoose";

// the tembleate
 const schema = new Schema({
    title :{
           type: String,
           required:true,
           // unique it refer's to the title should not repeted 
           unique:true
           
    },
    age :{
        type: String,
        required:true,
 },
 });

 //to use this timplate outside the folder 
 export const Movie =  model("Movie",schema)