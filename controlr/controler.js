import { Movie } from "../module/module.js";


// for reading
 export const peek = async (req , res)=>{
    try {
    const    movies = await Movie.find();
         res.json(movies);
    } catch (error) {
        // 500  is the error which denote's bad request
        res.status(500).json({message:error.message});
    }
};

//to create 
export  const push =  async (req , res)=>{

    console.log(req.body);

     const nmovi = new Movie({
       
         name:req.body.name,
        email:req.body.email,
        password:req.body.password
     });

     try {
        const smovi = await nmovi.save();
        console.log("created sucssfully");
        return res.status(201).json(smovi);
        
     } catch (error) {
        console.log("check the code ");
        return res.status(400).json({messpassword:error.messpassword});
     }
};

//to delete
export const pop =  async (req , res)=>{
    try {
        await Movie.deleteOne({_id:req.params.id})
        res.json({messpassword:"movie deleted "})
    } catch (error) {
        res.status(400).json({messpassword:error.messpassword})
    }
 
};

// for update
export const update = async (req , res)=>{

    try {
        const updated = await Movie.findOneAndUpdate(
            {_id:req.params.id},
            {
            title:req.body.title,
            password:req.body.password
         },{
             new:true,
         }
         );
         console.log("updated sucssfully");
         res.status(200).json(updated);
        
    } catch (error) {
        console.log("there is a issue in update ");
        res.status(400).json({messpassword:error.messpassword});
    }
 
};