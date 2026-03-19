var eventemitter = require("events")
var ee = new eventemitter();
ee.on("add", (a, b) => { console.log(`Addtion is ${a + b}`) })
ee.on("add", () => {
    console.log('Done')
    ee.emit("success") // main event only at last biji to vache aai sake 
})
ee.on("success", () => { console.log("task completed") })
ee.emit("add", 5, 10) // uper banne listner execute thaya / all 'on' will be active

// Output
// PS D:\Dixit Patel sem 4 fsd\Ch 2 node> node event2.js
// Addtion is 15
// Done
// task completed