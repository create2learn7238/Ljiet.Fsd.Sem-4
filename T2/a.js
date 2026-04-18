var express = require("express")
var app = express()

app.get("/", (req, res) => {
    res.set("Content-Type", "Text/html")

    //res.setHeader("Content-Type", "Text/html")
    //res.type("text/html")


    res.write("<h3> Hello B2 Student !!</h3> <br> <a href='about'>About</a> <a href='send'>Send</a>")
    res.send();
})
app.get("/about", (req, res) => {

    //res.set("Content-Type", "Text/html")
    //res.setHeader("Content-Type", "Text/html")

    res.type("text/html")
    res.write("<h3> what <p>About<p> your Marks!!</h3>")
    res.send();

})

app.get("/send", (req, res) => {

    //res.set("Content-Type", "Text/html")
    //res.setHeader("Content-Type", "Text/html")
    // //res.type("text/html")

    res.send("<h3> Direct Send Chale </h3>");

})
app.listen(5001, () => { console.log("Server running at: http://localhost:5001"); });
