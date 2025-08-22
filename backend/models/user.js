const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");


const userSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    profilePic: {
        filename: String,
        url: { type: String },
    }
});



userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);