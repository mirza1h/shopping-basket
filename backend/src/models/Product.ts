import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  url: {
    type: String,
  },
  removed: {
    type: Boolean,
    default: false,
  },
  timeAddedToCart: {
    type: Date,
  },
  timeRemovedFromCart: {
    type: Date,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
