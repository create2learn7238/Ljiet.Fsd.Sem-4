var express = require("express")
var app = express()
var s = require("express-session")
app.use(s({
    secret: "lj123",
    ersave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 },
    name: "my"
}))
app.get("/", (req, res) => {
    if (req.session.page_view) {
        req.session.page_view++
        res.send(`<h1 style=color:red>You have Visited ${req.session.page_view} </h1> `)
    }
    else {
        req.session.page_view = 1
        res.send(`<h1> Welcome to my website <h1>`)
    }
})
app.listen(5012, () => { console.log("Server running at: http://localhost:5012"); });