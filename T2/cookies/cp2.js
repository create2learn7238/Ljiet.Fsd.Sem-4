var express=require("express")
var app=express()
var cp=require("cookie-parser")
app.use(cp())
app.get("/" ,(req,res)=>{
    res.cookie("fname","ANC")
    res.cookie("lname","zdz")
    res.cookie("sub","fsd2",{maxAge:5000})

    res.cookie("email","abc@gmail.com",{expires:new Date(Date.now()+10000)})
    res.clearCookie("fname")
    res.send(req.cookies)
}
)
app.listen(5010, () => { console.log("Server running at: http://localhost:5010"); });