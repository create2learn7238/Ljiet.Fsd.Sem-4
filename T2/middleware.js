var express = require("express")
var app = express()

var first = (req, res, next) => {
    console.log("1 Middle Ware")
    next()
}

var second = (req, res, next) => {
    req.name = "Dixit"
    console.log("2 Middle Ware")
    next()
}

var third = (req, res, next) => {
    req.marks = 25;
    console.log("3 Middle Ware")
    next()
}
//1. Method
app.use("/test", first, third);
app.get("/test", (req, res) => {
    res.send("My Page")
})
//2. Method
app.get("/all", first, second, third, (req, res) => {
    res.send(`<h1> Hello ${req.name} </h1> <h2> Your Marks : ${req.marks}`)
})
app.listen(7777, () => { console.log("Server running at: http://localhost:7777"); });
