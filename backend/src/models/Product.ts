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
    }
})

module.exports = mongoose.model('Product', ProductSchema);