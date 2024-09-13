import mongoose from "mongoose";

export const connectDB = async ()=>{
    try{
        const connectionstring = "mongodb+srv://nimesha:Herm35JXCfM6fix7@store.v3ccr.mongodb.net/?retryWrites=true&w=majority&appName=store";
        await mongoose.connect(connectionstring);
        console.log("Conected to the database...!");
    }catch(error){
        console.log(error);
        console.log("Error while connecting to the database..!")
    }
};