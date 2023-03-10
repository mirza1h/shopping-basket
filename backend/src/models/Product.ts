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
  added: {
    type: Boolean,
    default: false,
  },
  timeAddedToCart: {
    type: Date,
  },
  timeRemovedFromCart: {
    type: Date,
  },
  reason: {
    type: String,
    default: "N/A",
    optional: true,
    min: 3,
    max: 255,
  },
});

export default mongoose.model("Product", ProductSchema);
