const express = require("express");
const router = express.Router();
const Bid = require("../models/bid")
const User = require("../models/user")
const Product = require("../models/product")
const ExpressError = require("../utils/ExpressError")
const wrapAsync = require("../utils/wrapAsync")

router.post("/placebid", wrapAsync(async (req, res, next) => {

    const now = new Date();

    // IST is UTC+5:30
    const istOffset = 5.5 * 60; // in minutes
    const utcOffset = now.getTimezoneOffset(); // server's offset from UTC in minutes

    // Convert server time -> IST
    const istNow = new Date(now.getTime() + (istOffset + utcOffset) * 60 * 1000);
    const currentMinuts = istNow.getMinutes()
    const currentHour = istNow.getHours();
    const product = await Product.findById(newBid.productId)
    /*const [startHour, startMinute] = product.bidStartTime
        ? product.bidStartTime.split(":").map(Number)
        : [];*/



    res.json("type:", typeof product.bidStartTime)
    /*
        const newBid = new Bid(req.body)
        newBid["userId"] = req.user._id
        newBid["userName"] = req.user.username
        const product = await Product.findById(newBid.productId)
        //const [hours, minutes] = (product?.bidStartTime?.split(":").map(Number)) || [];
        const [hours, minutes] = product.bidStartTime
            ? product.bidStartTime.split(":").map(Number)
            : [];
        res.json({ currentHour, currentMinuts, hours, minutes, newBid })
    */
    /*
        if (hours === currentHour && minutes > currentMinuts) {
            const addedBid = await newBid.save();
            res.status(200).json(addedBid)
        }
        else {
            res.status(200).json("Time Over")
        }*/
}))


// For getting product by product _id for viewing details
router.get("/getbids/:_id", wrapAsync(async (req, res, next) => {

    const productId = (req.params._id)
    const bids = await Bid.find({ productId: productId })
    res.json(bids)
}))

router.get("/myBids", wrapAsync(async (req, res, next) => {

    const userId = req.user._id
    //const userBids = await Bid.find({ userId: userId })
    const userBids = await Bid.find({ userId: userId }).select('productId')
    const userBidsId = userBids.map(doc => doc.productId);
    const mybids = await Product.find({ _id: { $in: userBidsId } });
    res.json(mybids)
}))

router.post("/winner", wrapAsync(async (req, res, next) => {

    const MaxBid = await Bid.aggregate([
        { $match: { productId: req.body.productId } },
        {
            $sort: { bidAmount: -1 }
        },
        { $limit: 1 }
    ])

    const newProduct = await Product.findById(MaxBid[0].productId)
    newProduct["winnerName"] = MaxBid[0].userName
    newProduct["winnerId"] = MaxBid[0].userId
    newProduct["soldPrice"] = MaxBid[0].bidAmount
    const addedProduct = await newProduct.save();
    console.log(MaxBid[0].userName)
    res.json(MaxBid[0].userName)
}))

router.get("/wonItem", wrapAsync(async (req, res, next) => {

    const userId = req.user._id
    const products = await Product.find({ winnerId: userId })
    res.json(products)
}))

module.exports = router;