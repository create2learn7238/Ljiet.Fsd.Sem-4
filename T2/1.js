var express = require("express")
var app = express()
app.use(express.static("frontend", { index: "2.html" }))
app.listen(8888, () => { console.log("Server running at: http://localhost:8888"); });