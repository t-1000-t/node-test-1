const express = require("express")
const app = express()
const logger = require("morgan")
const config = require("./config/config")
const apiRouter = require("./router/router")

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
app.get("/", (req, res) => {
    res.send("index")
})

// TODO "page for authorization"
app.use("/sing-in", () => {})
app.use("/sing-up", () => {})
app.use("/dashboard", () => {})

// TODO "API urls for work"
app.use("/api", apiRouter)

app.listen(config.port, () => console.log(`Server running on port ${config.port}`))