/**
 * 1. Create a connection func for mongodb
 * 2. Start a local mongodb server connection
 */

const mongoose = require('mongoose')
require('dotenv').config();
const { MONGO_URI } = process.env

// Create the connection function
/*
const connectDB = () => {
    mongoose.connect(MONGO_URI, {
        useNewUriParser: true,
        useCraeteIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(()=> {
        console.log("MongoDB connected...");

        // Seed data
    })
    .catch((err) => {
        console.error(err.message);

        // Exit with failure
        process.exit(1)
    })
}
*/
// Async mongoose connection

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
        useNewUriParser: true,
        useCraeteIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
        });

        console.log("MONGODB connected...");
    } catch (err) {
       console.error(err.message);
       
       // Exit with failure
       process.exit(1);
    }
}

module.exports = connectDB;