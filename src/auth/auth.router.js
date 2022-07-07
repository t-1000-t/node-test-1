const express = require("express")
const router = express.Router()

const login = require("./login")
const register = require("./register")

router.post("/login", login)
router.post("/register", register)
router.post("/logout", (req, res) => {})

module.exports = router