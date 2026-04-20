var express = require("express")
var app = express()
var cp = require("cookie-parser")
app.use(cp())
app.use(express.urlencoded())
app.use(express.static(__dirname, { index: "from.html" }))
app.post("/", (req, res) => {
    res.cookie("fname", req.body.fn)
    res.cookie("lname", req.body.ln)
    res.cookie("pass", req.body.pass)
    res.redirect("/admin")
    // res.send(req.cookies)

})
app.get("/admin", (req, res) => {
    res.clearCookie("lname")
    res.send(`<h1> Welcome ${req.cookies.fname} ${req.cookies.lname} </h1> <br> <h3> Password ${req.cookies.pass}`)
})
app.listen(5011, () => { console.log("Server running at: http://localhost:5011"); });