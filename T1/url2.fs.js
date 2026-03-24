var url = require('url')
var p = "https://www.example.com/test?t1=20&t2=25&t3=22&t4=21"
var up = url.parse(p, true)
var t1 = Number(up.query.t1)
var t2 = Number(up.query.t2)
var t3 = Number(up.query.t3)
var t4 = Number(up.query.t4)
var fs = require("fs")
fs.writeFileSync("marks.txt",
    `Marks of T1:${t1}
    Marks of T2:${t2}
    Marks of T3:${t3}
    Marks of T4:${t4}
    Marks Total=${t1 + t2 + t3 + t4}
    Avg=${(t1 + t2 + t3 + t4) / 4}
    `)
console.log(up)