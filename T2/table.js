var express = require("express")
var app = express()

obj = [{ "name": "x", "age": 30 }, { "name": "y", "age": 15 }, { "name": "z", "age": 45 }]
app.get("/api", (req, res) => {
    //1.Method
    res.send(obj);
})
app.get("/api2", (req, res) => {
    //2.Method
    res.json(obj);
})
app.get("/api3", (req, res) => {
    //3.Method
    res.write(JSON.stringify(obj));
    res.send()
})
app.get("/sort", (req, res) => {
    var x = obj.sort((a, b) => b.age - a.age)
    res.type("text/html")
    res.write(`<table border="5" style="text-align: center" > <tr> <th> Name </th> <th> Age </th> <tr>`)
    for (i of x) {
        res.write(`<tr> <td> ${i.name} </td> <td> ${i.age} </td> <tr> `)
    }
    res.write(`</table>`)
    res.send()
})
app.listen(7200, () => { console.log("Server running at: http://localhost:7200"); });