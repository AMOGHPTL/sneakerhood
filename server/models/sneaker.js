import mongoose from "mongoose";

const sneakerSchema = new mongoose.Schema({
      "id": String,
      "brand": String,
      "name": String,
      "colorway": String,
      "gender": String,
      "silhouette": String,
      "releaseYear": String,
      "retailPrice": Number,
      "size": Number,
      "story": String,
      "image": String,
})

const Sneaker = mongoose.model("Sneaker",sneakerSchema);

export default Sneaker;

