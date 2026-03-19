var eventemitter = require("events")
var ee = new eventemitter();
var fun1 = (m) => { console.log(`Fun1 msg : ${m}`) }
var fun2 = (m) => { console.log(`Fun2 msg : ${m}`) }
ee.on("e1", fun1)
ee.on("e1", fun2)
ee.on("e2", fun1)
ee.on("e2", fun2)
var c1 = ee.listenerCount("e1")//2
console.log(c1)
ee.removeListener("e1", fun1) // j event delete karvi hoy e 
ee.removeAllListeners("e1") // if executed e1 event has 0 listener
var c = ee.listenerCount("e1")
console.log(`e1 event has ${c} listener`) // e1 event has 1 listener
ee.emit("e1", "hello Student !")
ee.emit("e2", 'Event Module')

// Output
// 2
// e1 event has 1 listener
// Fun2 msg : hello Student !
// Fun1 msg : Event Module
// Fun2 msg : Event Module