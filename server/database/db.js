import mongoose from "mongoose";

const DBConnection = async () =>{
    const MONGO_URI = "mongodb+srv://priyavarshney081003:4Mo7EvHKOeTALrgf@cluster0.cvsnih4.mongodb.net/medconnect?retryWrites=true&w=majority&appName=Cluster0";
    try {
        await mongoose.connect(MONGO_URI,{useNewUrlParser:true,useUnifiedTopology:true});
        console.log("connected to database");
    } catch (error) {
        console.log(error.message);
    }
}

export default DBConnection;