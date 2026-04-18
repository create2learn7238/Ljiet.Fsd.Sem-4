var express = require("express");
var app = express();

app.use(express.static(".", { index: "calc.html" }));

app.get("/calc", (req, res) => {
    let n = Number(req.query.n) || 0;
    let m = Number(req.query.m) || 0;
    let s = req.query.slct;
    let result;

    if (s == "add") result = n + m;
    else if (s == "square") result = (n + m) ** 2;
    else if (s == "cube") result = (n + m) ** 3;
    else return res.send("No operation selected");

    res.send(`Result: ${result} <br> <a href="/">Back</a>`);
});

app.listen(6600, () => {
    console.log("Server running at http://localhost:6600");
});
