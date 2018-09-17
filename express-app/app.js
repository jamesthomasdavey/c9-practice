const express = require("express");
const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    const pageTitle = "Home Page"
    res.render("home", { pageTitle });
})

app.get("*", (req, res) => {
    res.send("Page not found.");
})

app.listen(process.env.PORT, process.env.IP, () => {
    console.log("Your server is now running.");
})
