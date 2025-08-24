const express = require("express")
const app = express()
const mongoose = require("mongoose")
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require(".//models/user")
const Product = require("./models/product")
const cors = require("cors")

require('dotenv').config();

// Routes
const userRoutes = require("./routes/users")
const productRoutes = require("./routes/products")
const bidRoutes = require("./routes/bid")

const db_url = process.env.ATLASDB_URL;


main().then(() => {
    console.log("Connect to database");
}).catch((err) => {
    console.log(err);
})

async function main() {
    mongoose.connect(db_url);
}



// middlewares 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: "https://click-two-bid.vercel.app/", // your Render frontend URL
    credentials: true
}));

// for express session saving cookies 
const sessionOption = {
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        // cookie will expire after 5 days
        expires: Date.now() + 5 * 24 * 60 * 60 * 1000, // milliseconds ( for seven days)
        maxAge: 5 * 24 * 60 * 60 * 1000,
        httpOnly: true, // for security 
    }
}


app.use(session(sessionOption));


app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Using routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes)
app.use("/api/bids", bidRoutes)

// for error handling
app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Something went Wrong" } = err;
    //res.status(statusCode).render("listings/error.ejs", { err });
    console.log(err)
    console.log(message)
})

const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log("Server 8080 is Listening");
})
