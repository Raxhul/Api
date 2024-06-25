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
       
         title:req.body.title,
        age:req.body.age
     });

     try {
        const smovi = await nmovi.save();
        console.log("created sucssfully");
        return res.status(201).json(smovi);
        
     } catch (error) {
        console.log("check the code ");
        return res.status(400).json({message:error.message});
     }
};

//to delete
export const pop =  async (req , res)=>{
    try {
        await Movie.deleteOne({_id:req.params.id})
        res.json({message:"movie deleted "})
    } catch (error) {
        res.status(400).json({message:error.message})
    }
 
};

// for update
export const update = async (req , res)=>{

    try {
        const updated = await Movie.findOneAndUpdate(
            {_id:req.params.id},
            {
            title:req.body.title,
            age:req.body.age
         },{
             new:true,
         }
         );
         console.log("updated sucssfully");
         res.status(200).json(updated);
        
    } catch (error) {
        console.log("there is a issue in update ");
        res.status(400).json({message:error.message});
    }
 
};