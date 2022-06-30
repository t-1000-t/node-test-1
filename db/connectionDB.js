const mongoose = require("mongoose")
const { mongodbUri } = require("../config/config")

async function connectionDB() {
    try {
        await mongoose.connect(mongodbUri)
        console.log('MongoDB connected...')
    } catch (error) {
        console.log('MongoDB connection error', error)
        process.exit(1)
    }
}

module.exports = connectionDB