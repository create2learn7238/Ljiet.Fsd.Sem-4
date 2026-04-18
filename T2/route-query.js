var express = require("express")
var app = express()
app.get("/product/:pid/cat/:cat", (req, res) => {
    res.send(`<h1> Product id is ${req.params.pid} and category is ${req.params.cat} and age=${req.query.age}`)
})
app.get("/:id", (req, res) => {
    res.write(`<h1> Welcome : ${req.query.name} <br> Your User Id : ${req.params.id} </h1>`)
    res.write(req.query.age > 10 ? "<h3> adult </h3> " : "<h5>  kids </h5> ")
    res.send()
})
app.listen(7300, () => { console.log("Server running at: http://localhost:7300"); });