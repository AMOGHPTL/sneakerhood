import mongoose from "mongoose";
import Sneaker from "../models/sneaker.js";
import data from "./smapleData.js";

mongoose.connect('mongodb://127.0.0.1:27017/sneakerhood').then(console.log("CONNECTED TO MONGO")).catch(e=>{console.log("error connecting")});

const seedDB = async () => {
    await Sneaker.deleteMany();
    for(let i=0;i<=data.length;i++){
        const newSneaker  =  new Sneaker(data[i]);
        await newSneaker.save();
    }
}

seedDB().then(()=>{console.log(mongoose.connection.close())});