const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema(
    {
        email: {
        type: String,
        require: true,
        index: true,
        unique: true,
        },
        password: {
        type: String,
        required: true,
        }
    },
    {
        timestamps: true,
    }
)

module.exports = Users = mongoose.model("Users", userSchema)