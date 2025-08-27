const express = require("express");
const router = express.Router();
const Product = require("../models/product")
const Bid = require("../models/bid")
const User = require("../models/user")
const wrapAsync = require("../utils/wrapAsync")
const ExpressError = require("../utils/ExpressError")
const { startOfDay, endOfDay } = require('date-fns');
const { utcToZonedTime } = require('date-fns-tz');

// for Uploading Images
const multer = require('multer')
const { storage } = require("../cloudineryConfig");
const upload = multer({ storage })
//upload.single("productImage"),
router.post("/newProduct", upload.single("productImage"), wrapAsync(async (req, res, next) => {

    const newProduct = new Product(req.body);
    const owner = req.user
    newProduct["ownerId"] = req.user._id

    let url = req.file.path;
    let filename = req.file.filename;
    newProduct.productImage = { url, filename };

    if (owner.isAdmin == true) {
        const addedProduct = await newProduct.save();
        res.json({ message: "Product added sucessfully" })
    } else {
        console.log("You are not an Admin")
        res.json("You are not an Admin")
    }

}))


// for updating the product
router.post("/update/:_id", upload.single("productImage"), wrapAsync(async (req, res, next) => {

    const productId = (req.params._id)
    const currProduct = await Product.findById(productId)
    const oldurl = currProduct.productImage.url
    const oldfilename = currProduct.productImage.filename

    let updatedProduct = await Product.findByIdAndUpdate(productId, { ...req.body });
    if (typeof req.file !== "undefined") {
        console.log("Execute if block")
        let url = req.file.path;
        let filename = req.file.filename;
        updatedProduct.productImage = { url, filename };
        await updatedProduct.save();
    } else {
        let url = oldurl
        let filename = oldfilename
        updatedProduct.productImage = { url, filename }
        await updatedProduct.save()

    }
    res.json("Updated")

}))



// For getting Todays's Auction Items
/*
router.get("/getTodaysProducts", wrapAsync(async (req, res, next) => {
    const timeZone = 'Asia/Kolkata';

    // Current time in IST
    const nowInIST = utcToZonedTime(new Date(), timeZone);

    // Start and end of today in IST (as JS Date in UTC)
    const todayStart = startOfDay(nowInIST);
    const todayEnd = endOfDay(nowInIST);

    console.log("IST Start:", todayStart);
    console.log("IST End:", todayEnd);

    // Query products within IST today
    const posts = await Product.find({
        bidDate: {
            $gte: todayStart,
            $lte: todayEnd
        }
    });

    res.json(posts);
}));*/



router.get("/getTodaysProducts", wrapAsync(async (req, res, next) => {

    // For checking date
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);

    const posts = await Product.find({
        bidDate: {
            $gte: startOfDay,
            $lte: endOfDay
        }
    });
    res.json(posts)
}))


// for deleting the Product
router.get("/:_id/delete", wrapAsync(async (req, res, next) => {
    const { _id } = req.params;
    if (req.user.isAdmin == true) {
        const deletedBids = await Bid.deleteMany({ productId: _id });
        const deletedProduct = await Product.findByIdAndDelete(_id);
        console.log(deletedProduct)
        console.log(deletedBids)
        res.status(200).json("Sucessfully Deleted")
    }
}))

// For getting all the products for Upcoming Collections
router.get("/getAllProducts", wrapAsync(async (req, res, next) => {
    const posts = await Product.find({})
    res.json(posts)
}))

// For getting all the top Collections products
router.get("/getTopCollection", wrapAsync(async (req, res, next) => {
    const posts = await Product.find({ winnerId: { $exists: true, $ne: null } })
    res.json(posts)
}))

// For getting all the products of Art & Crafts
router.post("/art&Crafts", wrapAsync(async (req, res, next) => {
    const cat = req.body.category
    const posts = await Product.find({ category: cat })
    res.json(posts)
}))

// For getting Searched products 
router.post("/search", wrapAsync(async (req, res, next) => {
    const name = req.body.title
    const posts = await Product.find({ productName: name })
    res.json(posts)
}))

// For getting product by product _id for viewing details
router.get("/productdetails/:_id", wrapAsync(async (req, res, next) => {
    const productId = (req.params._id)
    const product = await Product.findById(productId)
    res.json(product)
}))


module.exports = router;