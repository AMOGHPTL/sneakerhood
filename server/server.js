import axios from "axios";
import express from "express";
import mongoose from "mongoose";
import Sneaker from "./models/sneaker.js";
import User from "./models/user.js";
import CurrentUser from "./models/currentUser.js";
import cors from "cors";

const app = express();
mongoose.connect('mongodb://127.0.0.1:27017/sneakerhood').then(console.log("CONNECTED TO MONGO")).catch(e=>{console.log("error connecting")});

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/sneakers", async(req,res) => {
    const sneakers = await Sneaker.find();
    res.send(sneakers);
})

app.post("/signup", async(req,res) => {
   const newUser = new User(req.body);
   await newUser.save();
   res.send("new user created",newUser);
})

app.post("/login", async(req,res) => {
   const user = req.body;
   const findUser = await User.find({email:user.email,password:user.password})
   if(findUser==[]){
    res.send("no user found")
   }else{
    res.send(findUser);
   }
})

app.get("/sneaker/:id",async(req,res) => {
    const {id} = req.params;
    const sneaker = await Sneaker.findById(id);
    res.send(sneaker);
})

app.post("/addToCart" , async(req,res) => {
    const {id,user} = req.body;
      const updatedUser = await User.findOneAndUpdate(
            { email: user },
            { $push: { cart: id } },
            { new: true } // Return updated document
        );
    res.send(updatedUser);
})

app.post("/removeFromCart" , async(req,res) => {
    const {id,user} = req.body;
    const updatedUser = await User.findOneAndUpdate(
            { email: user },
            { $pull: { cart: id } },
            { new: true } // Return updated document
        );
    res.send(updatedUser);
})

app.post("/checkInCart" , async(req,res) => {
    const {id,user} = req.body;
    const cartItems = await User.findOne({email:user});
    if(cartItems&&cartItems.cart.includes(id)){
        res.send(true);
    }else{
        res.send(false);
    }
   
})

app.post("/getLiked" , async(req,res) => {
    const userEmail = req.body;
    const liked = await User.findOne({email:userEmail})
    res.send(liked);
})

app.post("/addToLiked" , async(req,res) => {
    const {id,user} = req.body;
      const updatedUser = await User.findOneAndUpdate(
            { email: user },
            { $push: { liked: id } },
            { new: true } // Return updated document
        );
    res.send(updatedUser);
})

app.post("/removeFromLiked" , async(req,res) => {
    const {id,user} = req.body;
    const updatedUser = await User.findOneAndUpdate(
            { email: user },
            { $pull: { liked: id } },
            { new: true } // Return updated document
        );
    res.send(updatedUser);
})

app.post("/checkInLiked" , async(req,res) => {
    const {id,user} = req.body;
    const likedItems = await User.findOne({email:user});
    if(likedItems&&likedItems.liked.includes(id)){
        res.send(true);
    }else{
        res.send(false);
    }
   
})

app.post("/setCurrentuser" , async(req,res) => {
    const currentEmail = req.body;
    const currentUser = new CurrentUser(currentEmail);
    await currentUser.save();
    res.send(currentUser);
})

app.delete("/removeCurrentuser" , async(req,res) => {
    const removedUser = await CurrentUser.deleteMany();
    res.send(removedUser);
})

app.get("/currentUser" , async(req,res) => {
    const currentUser = await CurrentUser.findOne();
    res.send(currentUser);
})

app.post("/currentUserData" , async(req,res) => {
    const userEmail = req.data;
    const userData = await User.findOne({email:userEmail});
    res.send(userData);
})



app.listen(5000,()=>{console.log("Serving on port 5000")});