const express = require("express")
const server = express()
const nunjucks = require("nunjucks")

server.use(express.static("public"))

nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

server.get("/", (req, res) => {
    res.render("index.html")
})
server.get("/create-point", (req, res) => {
    res.render("create-point.html")
})
server.get("/search", (req, res) => {
    res.render("search-results.html")
})

server.listen(3000)