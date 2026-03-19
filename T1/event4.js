// Ques : check radius is negative or not if yes show msg else show perimeter same of Square 
var eventemitter = require("events")
var ee = new eventemitter();
ee.on("calc", (radius, side) => {
    if (radius < 0) { console.log("Radius is nagative") }
    else {
        console.log(`Permeter of circle ${radius * 2 * 3.14}`)
    }
        if (side < 0) { console.log("Side is nagative") }
        else {
            console.log(`Permeter of Square ${radius * 4}`)
        }
    })
ee.emit("calc",3,-2)

// Output 3,2
// PS D:\Dixit Patel sem 4 fsd\Ch 2 node> node event4.js
// Permeter of circle 18.84
// Permeter of Square 12