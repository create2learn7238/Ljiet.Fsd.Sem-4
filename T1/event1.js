var eventemitter = require("events")
var ee = new eventemitter();
ee.on("start", () => { console.log("First exe") })
ee.emit("start") // always at last 

// Output
// PS D:\Dixit Patel sem 4 fsd\Ch 2 node> node event1.js
// First exe