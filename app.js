const express = require('express');
const app = express();
require("dotenv").config();
const connectToDB = require('./config/mongoose-connection');
const authRouter = require('./routes/auth');
const passport = require('passport');
const expressSession = require('express-session');
require('./config/googleStrategy');
connectToDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(expressSession({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRouter);
app.get("/", (req, res) => {
    res.send("App is working");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
