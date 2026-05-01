var express = require("express")
var app = express()
var mult = require("multer")

app.use(express.urlencoded())
app.use(express.static(__dirname, { index: "mult2.html" }))

var store = mult.diskStorage({
    destination: "myimages",
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now() + ".jpg")
    }
})
var upload = mult({
    storage: store,
    limits: { fileSize: 10 * 1024 * 1024 * 1024 }
})
app.post("/upload", upload.array("test", 5), (req, res) => {
    const file = req.files;
    if (file) {
        res.type("text/html")
        for (f of file) {
            res.write(`<h2> file ${f.originalname} has been uploaded </h2> `)
        }
    }
    res.send()
})
app.listen(5011, () => { console.log("Server running at: http://localhost:5011"); });