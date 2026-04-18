var express = require("express")
var app = express()
var path = require("path")

var hp = path.join(__dirname, "../html")
var cp = path.join(__dirname, "../css")
var ip = path.join(__dirname, "../images")

// app.use(express.static(ip))
// app.use(express.static(cp))
app.use(express.static(hp, { index: "my.html" }))

// This makes files in the css folder available at /css/filename.css
app.use("/css", express.static(cp));
app.use("/images", express.static(ip));

app.use(express.urlencoded())

app.post("/data", (req, res) => {
    res.type("text/html")
    res.write(`<h1> Welcome ${req.body.uname} </h1> `)

    var m = (req.body.msg).split(".")
    for (i of m) {
        // res.write(i + "<br>")
    }

    res.write(`Click here <a href='/message?m=${req.body.msg}'> Vowels </a> `)
    res.send()
})
app.get("/message", (req, res) => {
    var v = req.query.m
    var c = 0
    for (i of v.toLocaleLowerCase()) {
        if ("aeiou".includes(i)) {
            c++
        }
    }
    res.send(`<h1> Vowels is/are : ${c} </h1> `)
})


app.listen(8888, () => { console.log("Server running at: http://localhost:8888"); });