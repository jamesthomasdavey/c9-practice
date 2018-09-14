const express = require("express");
const app = express();

app.get("/", (req, res) => {
    console.log("A hue man has made a request.")
    res.send("Hello, hue man.");
})

app.get("/dogs", (req, res) => {
    console.log("A dog has made a request.");
    res.send("Hello, dog man.");
})

app.listen(process.env.PORT, process.IP, () => {
    console.log("Server has started!");
})
