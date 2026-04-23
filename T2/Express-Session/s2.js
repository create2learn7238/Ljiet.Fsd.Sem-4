// write a script to meet following requirements:
// •	Create index.html file page which contains form(username,password,login button). and open it on localhost. 
// •	After clicking submit button, it should jump on “savesession” page. Store username and password in session.
// •	After saving session, redirect to “fetchsession” page and read value. Put a LOGOUT link here.
// •	Jump on delete session page after clicking LOGOUT link. 
// •	Destroy the session on this page and redirect to index.html page.

var express = require("express")
var app = express()
var s = require("express-session")
app.use(express.urlencoded())
app.use(express.static(__dirname, { index: "s2.html" }))
app.use(s({
    secret: "lj123",
}))
app.post("/savesession", (req, res) => {
    req.session.uname = req.body.uname
    req.session.pass = req.body.pass
    res.redirect("/fetchsession")

})
app.get("/fetchsession", (req, res) => {
    res.send(`<h1> Username:${req.session.uname} and Password:${req.session.pass} <br> <a href="/del">Logout<a>`)

})
app.get("/del", (req, res) => {
    req.session.destroy()
    res.redirect("/")

})
app.listen(5015, () => { console.log("Server running at: http://localhost:5015"); });