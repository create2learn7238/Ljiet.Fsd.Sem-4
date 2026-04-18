var express = require("express")
var app = express()
var path = require("path")
var sp = path.join(__dirname, "../frontend")
app.use(express.static(sp, { index: "2.html" }))
// alter and mostly use it 
// app.get("/",(req,res)=>{
//     res.sendFile(sp+"/1.html")
// })

app.listen(1234, () => { console.log("Server running at: http://localhost:1234"); });