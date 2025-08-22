const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const productSchema = new Schema({
    productName: {
        type: String,
        required: true,
    },
    ownerId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        max: 500,
    },
    bidDate: {
        type: Date,
    },
    bidStartTime: {
        type: String,
    },
    basePrice: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        enum: ["Painting", "Art & Crafts", "Coins", "Collectibles", "Antiques", "Sculpture", "Freelanc Project", "Photograph"],
    },
    productImage: {
        filename: String,
        url: { type: String },
    },
    winnerName: {
        type: String,
    },
    winnerId: {
        type: String,
    },
    soldPrice: {
        type: Number,
    },
});




module.exports = mongoose.model("Products", productSchema);