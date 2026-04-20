var express=require("express")
var app=express()
var cp=require("cookie-parser")
app.use(cp())
app.get("/" ,(req,res)=>{
    res.cookie("fname","ANC")
    res.cookie("lname","zdz")
    res.cookie("sub","fsd2",{maxAge:5000})
    res.send(req.cookies)
}
)
app.listen(3333, () => { console.log("Server running at: http://localhost:3333"); });