const router = require("express").Router()
const { urlRouter } = require("../src/urls")
const { authRouter } = require("../src/auth")

// TODO "1-Auth, 2-Users, 3-urls By User"
router.use("/url", urlRouter)
router.use("/auth", authRouter)

module.exports = router