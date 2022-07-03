require("dotenv").config()
module.exports = {
    mongodbUri: process.env.MONGO_DB_URI || 'mongodb://localhost:27027/shorturl',
    port: process.env.port || 500,
    mode: process.env.NODE_ENV || "production",
    appURL: "http://localhost:5000"
}