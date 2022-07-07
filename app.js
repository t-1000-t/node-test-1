const express = require("express")
const app = express()
const logger = require("morgan")
const config = require("./config/config")
const apiRouter = require("./router/router")
const getUrl = require("./src/urls/getUrlById")


require('./db/connectionDB')()

const optionsReactViews = { beautify: true };
if (config.mode === "development") {
    app.use(logger("dev"))
}

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine(optionsReactViews))

// TODO "depending on the word, open the desired page"
app.get('/:shortUrlId', getUrl)
app.get("/", (req, res) => {
    const query = req.query

    res.render("index", query)
})

// TODO "page for authorization"
app.get("/sign-in", (req, res) => {
    res.render("signIn")
})
app.get("/sign-up", (req, res) => {
    res.render("register")
})
app.get("/dashboard", (req, res) => {
    res.render("index")
})

// TODO "API urls for work"
app.use("/api", apiRouter)

app.listen(config.port, () => console.log(`Server running on port ${config.port}`))