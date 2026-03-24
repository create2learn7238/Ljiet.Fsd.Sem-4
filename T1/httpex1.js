// Write node.js script to print “Welcome to Home Page” with two links containing two pages named as “About Us” and “Contact Us” on home page of server. If user request for About Us page it should display “Welcome to LJ University” in bold font-style with blue color and if user request for Contact Us page it should display “Email:abc@ljinstitutes.edu.in” in italic font-style with red color if any other request is requested it shows “Page not found” message in plaintext.
var http = require("http")
var http = require("http")
var fs = require("fs")
http.createServer((req, res) => {
    if (req.url == "/") {
        res.writeHead(200, { "content-type": "text/html" });
        res.write("<h3>Welcome to Home Page </h3> <br>");
        res.write("<a href='aboutus'>About us  .</a>")
        res.write("<a href='contactus'>Contact us  .</a>")
        res.write("<a href='abc'>Other</a>")
        res.end();
    }
    else if (req.url == "/aboutus") {
        res.writeHead(200, { "content-type": "text/html" });
        res.write("<h5 style='font-weight:bold; color:green;'> Welcome to LJ University </h5>");
        res.write("<a href='/'>Home .</a>")
        res.write("<a href='contactus'>Contact us  .</a>")
        res.write("<a href='abc'>Other</a>")
        res.end();
    }
    else if (req.url == "/contactus") {
        res.writeHead(200, { "content-type": "text/html" });
        res.write("<h5 style='font-style: italic; color: red;'> Email:abc@ljinstitutes.edu.in </h5>");
        res.write("<a href='aboutus'>About us  .</a>")
        res.write("<a href='/'>Home  .</a>")
        res.write("<a href='abc'>Other</a>")
        res.end();
    }
    else {
        res.writeHead(200, { "content-type": "text/html" });
        res.write("<h2>Error: Page not found</h2>");
        res.write("<a href='aboutus'>About us  .</a>")
        res.write("<a href='contactus'>Contact us  .</a>")
        res.write("<a href='/'>Home  .</a>")
    }

}).listen(5010, () => { console.log("Server Satrted at http://localhost:5010") });
