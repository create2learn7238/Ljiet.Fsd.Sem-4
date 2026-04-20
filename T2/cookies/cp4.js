var express = require("express")
var app = express()
var cp = require("cookie-parser")
app.use(cp())
app.use(express.urlencoded())
app.use(express.static(__dirname, { index: "feedform.html" }))
app.post("/", (req, res) => {
    const { name, email, msg, feed } = req.body
    var obj = { name, email, msg, feed }
    res.cookie("feedback", obj, { expires: new Date(Date.now() + 10000) })
    res.send(`<h1> Succefully </h1> <br> <a href='/view_feedback'> View feedback </a> `)

})
app.get("/view_feedback", (req, res) => {
    if (req.cookies.feedback) {
        res.send(`<h1> Hello ${req.cookies.feedback.name} <br> ThankYou ! for your feedback : ${req.cookies.feedback.rating} </h1> <br> <a href='/'>Logout<a>`)
    }
    else {
        res.send(`<h1> No feed Back Availabvle </h1> <br> <a href='/'>Logout<a>`)
    }
})
app.listen(5511, () => { console.log("Server running at: http://localhost:5511"); });