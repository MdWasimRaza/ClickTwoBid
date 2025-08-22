const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bidSchema = new Schema({
    productId: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true,
    },
    bidAmount: {
        type: Number,
    }
},
    { timestamps: true }
);


module.exports = mongoose.model("Bid", bidSchema);