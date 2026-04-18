var express = require("express")
var app = express()
app.get("/", (req, res) => {
    res.send(`<form action="/data" method='get' > <input type="text" name='user' placeholder='Naam lakho cahlo'/> <br> <input type="password" placeholder='password 😁😁' name='pass'/> <button type='submit'>submit</button> </form>`)
})
app.get("/data", (req, res) => {
    const b = req.query;
    console.log(b)
    const u = req.query.user
    const p = req.query.pass
    res.send(`<h3> welcome ${u} ur pass = ${p} </h3>`)
})
app.listen(7500, () => { console.log("Server running at: http://localhost:7500"); });