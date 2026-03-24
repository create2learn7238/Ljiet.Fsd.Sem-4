var http = require("http")
var fs = require("fs")
http.createServer((req, res) => {
    if (req.url == "/") {
        res.writeHead(200, { "content-type": "text/html" });
        res.write("<h3> Images </h3>");
        res.end("<img src='img2.png' alt='no img'></img>");
    }
    else if (req.url == "/img") {
        var i = fs.readFileSync("img2.png");
        res.writeHead(200, { "Content-Type": "image/png" });
        res.end(i);
    }
    else {
        res.writeHead(200, { "content-type": "text/html" });
        res.write("<h2>Error: Page not found</h2>");
    }

}).listen(5003, () => { console.log("Server Satrted at http://localhost:5003") });
