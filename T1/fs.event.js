var eventemitter = require("events")
var ee = new eventemitter();
var fs = require("fs")

ee.on("createfolder", () => {
    if (!fs.existsSync("abc")) {
        fs.mkdirSync("abc")
    }
    else {
        console.log("ALready Exist")
        ee.emit("write")
    }
})

ee.on("write", () => {
    fs.writeFileSync("xyz.txt", "Hiiiiiiiiiiiiiiiiii")
    console.log("Written")
    ee.emit("append")
})

// yet to complete

ee.emit("createfolder")