var http = require("http");
const { json } = require("stream/consumers");
http.createServer((req, res) => {
    res.writeHead(200, { "content-type": "application/json" });
    var d = { "sub": "FSD-2", 'faculty': "NAS" }
    res.end(JSON.stringify(d));
}).listen(5002, () => { console.log("Server Satrted at http://localhost:5002") });