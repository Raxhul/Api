import express from "express"
import {
     peek,
     pop, 
     push, 
     update, 
    } from "../controlr/controler.js"

 const route = express.Router()
// to read data
route.get("/", peek);
//to add data
route.post("/",push);
//to update data
route.put("/:id",update);
//to delete data
route.delete("/:id", pop);

export default route