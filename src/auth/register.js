const { Users } = require("../users")

module.exports = async (req, res) => {
    try {
        const body = req.body
        if (body.password && body.email) {
        const user = await new Users(body)

        const result = await user.save()
        if (result) {
            res.redirect("/dashboard", 301)
           }
        } else {
            // error
       }
    } catch (err) {

    }
}