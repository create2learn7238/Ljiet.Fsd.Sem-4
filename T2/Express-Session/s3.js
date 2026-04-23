// 4) write a script to meet following requirements:
// •	Create session.html file page which contains form(username,password,login button). and open it on localhost.
// •	After clicking submit button, it should jump on “save” page. Store username and password in session.
// •	After saving session, redirect to “fetchdata” page and read value. On this page check authentication of user. User name and password must be “admin” and “admin@123” respectively.
// o	If this condition is true then display welcome admin and display logout link on this page(fetchdata).
// 	By clicking on logout link user should jump to “destroy” page and destroy the session there and display the message “Session destroyed”.  And give the link of “login” under that message. By clicking that link user will be redirected to the home page.
// o	Else display “Please enter valid username and password” and login link on this page(fetchdata).
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
    res.redirect("/fetchdata")

})
app.get("/fetchdata", (req, res) => {
    if (req.session.uname == "admin" && req.session.pass == "admin@123") {
        res.send(`<h1>Welcome ${req.session.uname} and <br> <a href="/del">Logout<a>`)
    }
    else {
        res.send(`Please enter valid username and password <br> <a href="/savesession">Logout<a>`)
    }

})
app.get("/del", (req, res) => {
    req.session.destroy()
    res.send("Session destroyed <br> <a href='/'>login<a> ")
    res.redirect("/")

})
app.listen(5018, () => { console.log("Server running at: http://localhost:5018"); });