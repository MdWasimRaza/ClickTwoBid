const express = require("express");
const router = express.Router();
const User = require("../models/user")
const passport = require("passport");


// for Uploading Images
const multer = require('multer')
const { storage } = require("../cloudineryConfig");
const upload = multer({ storage })

const BASE_URL = "https://click-two-n9kk7l2w6-wasims-projects-3d424c10.vercel.app/"

router.post(`${BASE_URL}/signup`, async (req, res) => {

    let newUser = new User({
        email: req.body.email,
        username: req.body.username,
    })
    let registeredUser = await User.register(newUser, req.body.password)
    console.log(registeredUser)
    res.json("sucessfull")
})


// SignUp for Admin User
router.get("/createAdminUser", async (req, res) => {

    let newUser = new User({
        email: "wasimraza123@gmail.com",
        username: "Wasim",
        isAdmin: true,
    })
    let registeredUser = await User.register(newUser, "Wasim")
    console.log(registeredUser)
    res.json("sucessfull")
})


// for Showing all the Admin Users
router.get("/getAdmins", async (req, res) => {
    try {
        const adminUsers = await User.find({ isAdmin: true });
        for (let i = 0; i < adminUsers.length; i++) {
            console.log(adminUsers[i])
        }
        res.send("all Admins")
    } catch (err) {
        console.log(err)
    }
})


router.post("/signin", passport.authenticate("local", { failureRedirect: "/signin" }), async (req, res) => {
    console.log("sucessfully login")
    res.status(200).json("Sucessfully Login")
})


// for checking Authentication
router.get("/authenticate", (req, res) => {
    if (req.isAuthenticated()) {
        res.send(req.user)
    } else {
        res.send("Not Authenticated")
    }
})


// for Logout user
router.get("/logout", (req, res, next) => {
    req.logout((err) => {
        if (err) {
            next(err)
        } else {
            console.log("Sucessfully Logot")
            res.send("Sucessfully Logot")
        }
    })
})

// Update Profile
router.post("/updateprofile/:_id", upload.single("profilePic"), async (req, res) => {
    try {
        const user = await User.findById(req.user._id)
        if (typeof req.file !== "undefined") {
            console.log("Execute if block")
            let url = req.file.path;
            let filename = req.file.filename;
            user.profilePic = { url, filename };
            await user.save();
        }
    } catch (err) {
        console.log(err)
    }

    res.send("sucess")
})


/*router.get("/", (req, res) => {
    res.send("Welcome to User rouute")
})*/

module.exports = router;