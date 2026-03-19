var p = require("path")
var fs = require("fs")
var path = 'myfile/first.txt'
var base = p.basename(path)
var dir = p.dirname(path)
var newpath = dir + "/" + base;
fs.mkdir(dir, (e) => {
    if (e) { throw e; }
    console.log("Created")
})

fs.writeFile(newpath, 'Path file system modul example', (e) => {
    if (e) { throw e; }
    else {
        fs.copyFile(newpath, 'myfile/second.txt', (e) => {
            if (e) { throw e; }
            else {
                console.log("File copied")
                fs.unlink(newpath, (e) => {
                    if (e) { throw e; }
                    console.log("File Completed")
                })
            }
        })
    }
})

// Output
// PS D:\Dixit Patel sem 4 fsd\Ch 2 node> node p1.js
// Created
// File copied
// File Completed