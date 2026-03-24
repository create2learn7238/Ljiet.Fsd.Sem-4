var http = require("http")
http.createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h3>Welcome Students</h3>");
    res.end("<h2> Ending </h2>"); // this should be at last 
    // res.write("ohhh no "); canot allow after end 
}).listen(5001, () => { console.log("Server Satrted at http://localhost:5001") });


// // res.writeHead(200, { "content-type": "text/html" });
// res.write("<h1>Welcome Students</h1>");