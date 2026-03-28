// 3.
// Write node js script to fetch values from url given below and display output as asked.
// "https://www.google.com/exam.txt?c1=Hello&c2=FSD2 T1 Test&c3=Welcome to LJU#AllTheBest"
// 1) Data must be written as below in file named “exam.txt”. File name must be fetched from the url
// given above.
// Output:
// Hello!
// Welcome to LJU FSD2 T1 Test
// #AllTheBest
// 2) Read content from file “exam.txt” and send response to server and display data in “/” page in same format as above but in H1 tag and in red color.
// 3) If any other page is requested it shows “Page not found” message in plain text.
var http = require('http')
var fs = require('fs')
var u = "https://www.google.com/exam.txt?c1=Hello&c2=FSD2 T1 Test&c3=Welcome to LJU#AllTheBest";
var url = require('url')
// var path = require("path")

var p = url.parse(u, true)
var content = `${p.query.c1}!\n${p.query.c3}${p.query.c2}\n${p.hash}`
fs.writeFileSync("." + p.pathname, content)
http.createServer((req, res) => {
    if (req.url === "/home") {
        var r = fs.readFileSync("." + p.pathname, "utf-8")
        res.writeHead(200, { "content-type": 'text/html' })
        res.end(`<h1 style='color:red' > <pre>${r}</pre>`)
    }
    else if (req.url === "/about") {
        res.writeHead(200, { "content-type": 'image/png' })
        res.end(fs.readFileSync("1.png"))
    }
    else if (req.url === "/api") {
        var a = { "name": "Rahul", 'Course': 'Node JS', 'Enrolled': "JS" }
        res.writeHead(200, { "content-type": 'application/json' })
        res.end(JSON.stringify(a))
    }
    else {
        res.writeHead(404, { "content-type": 'text/plian' })
        res.end("Error page not found")
    }
}).listen(7007)

//console.log(p)
// p
// Url {
// protocol: 'https:',
//     slashes: true,
//         auth: null,
//             host: 'www.google.com',
//                 port: null,
//                     hostname: 'www.google.com',
//                         hash: '#AllTheBest',
//                             search: '?c1=Hello&c2=FSD2%20T1%20Test&c3=Welcome%20to%20LJU',
//                                 query: [Object: null prototype] {
//     c1: 'Hello',
//         c2: 'FSD2 T1 Test',
//             c3: 'Welcome to LJU'
// },
// pathname: '/exam.txt',
//     path: '/exam.txt?c1=Hello&c2=FSD2%20T1%20Test&c3=Welcome%20to%20LJU',
//         href: 'https://www.google.com/exam.txt?c1=Hello&c2=FSD2%20T1%20Test&c3=Welcome%20to%20LJU#AllTheBest'
// }