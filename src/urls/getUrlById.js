const Urls = require("./urls.model")
const sendError = require("../../helper/respondError")

module.exports = (req, res, next) => {
const shortUrl = req.params.shortUrlId

    if (shortUrl === "sign-in" ||
        shortUrl === "sign-up" ||
        shortUrl === "logout" ||
        shortUrl === "dashboard"
    ) {
        return next()
    }

    Urls.findOne({ shortUrl })
        .then(result => {
            res.redirect(301, result.url)
        })
        .catch(err => {
            sendError(err, res)
        })
}