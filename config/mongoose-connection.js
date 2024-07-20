const mongoose = require('mongoose');
const db = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("connected to db");
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = db;