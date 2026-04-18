// Write an ExpressJS application that creates a login form containing fields for username and password along with a submit button. The form data should be sent to the server using the POST method. Implement an authentication middleware that checks whether the entered username is "admin" and the password is "1234". If the credentials are correct, the application should display the message "Login Successful". Otherwise, it should display "Invalid Credentials".

var express = require("express")
var app = express()
app.use(express.urlencoded({ extended: true }))

app.get("/login", (req, res) => {
    res.send(`
        <form action="/data" method='post'> 
            <input type="text" name='user' placeholder='Naam lakho cahlo'/> <br> 
            <input type="password" placeholder='password 😁😁' name='pass'/> 
            <button type='submit'>submit</button> 
        </form>
    `)
})

var auth = (req, res, next) => {
    if (req.body.user == "admin" && req.body.pass == "1234") {
        req.statusMessage = "Login Successful";
        // msg Store karayo pachiii print karavse 
        // or res.send("Login Successful");
    } else {
        req.statusMessage = "Invalid Credentials";
    }
    next();
}
app.post("/data", auth, (req, res) => {
    res.send(`<h1>${req.statusMessage}</h1>`);
    console.log("Completed");
})
app.listen(7777, () => {
    console.log("Server running at: http://localhost:7777/login");
});
