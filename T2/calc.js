// var express = require("express")
// var app = express()
// app.use(express.urlencoded({ extended: true }))
// app.get("/", (req, res) => {
//     res.send(`<h1> Calc </h1> <br> <form action="/data" method='post' > <input type="number" name='num1'/> <input type="number" name='num2'/>  <button type='submit' name="add" >1 ne 1 2</button> <br> <button type='submit' name="sub">1 mathi 1 jaay to 0 </button> </form>`)
// })
// app.post("/data", (req, res) => {
//     const b = req.body;
//     console.log(b)
//     const n = req.body.num1
//     const m = req.body.num2
//     const a = req.body.add
//     const s = req.body.sub
//     parseInt(a)
//     if (a = "") {
//         res.send(`<h3> ans : ${parseInt(n)}+${parseInt(m)} </h3>`)
//     }
// })
// app.listen(7777, () => { console.log("Server running at: http://localhost:7777"); });
// not working on the way 
var express = require("express")
var app = express()
app.use(express.urlencoded({ extended: true }))
app.get("/", (req, res) => {
    res.send(`
        <h1> Calc </h1>
        <form action="/data" method='post'>
            <input type="number" name='num1' placeholder="Number 1" required />
            <input type="number" name='num2' placeholder="Number 2" required />
            
            <select name="operation">
                <option value="add">1 ne 1 2 (+)</option>
                <option value="sub">1 mathi 1 jaay to 0 (-)</option>
            </select>
            
            <button type='submit'>Calculate</button>
        </form>
    `)
})

app.post("/data", (req, res) => {
    const n = parseInt(req.body.num1)
    const m = parseInt(req.body.num2)
    const op = req.body.operation

    let result = 0
    let symbol = ""

    if (op === "add") {
        result = n + m
        symbol = "+"
    } else if (op === "sub") {
        result = n - m
        symbol = "-"
    }

    res.send(`<h3> Ans: ${n} ${symbol} ${m} = ${result} </h3> <a href="/">Back</a>`)
})

app.listen(7777, () => { console.log("Server running at: http://localhost:7777"); });
