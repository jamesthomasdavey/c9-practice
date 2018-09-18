const express = require("express");
const app = express();
const axios = require("axios");

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("search");
})

app.get("/results", (req, res) => {
  const s = req.query.s;
  const url = `http://www.omdbapi.com/?apikey=thewdb&s=${s}`;
  axios.get(url)
    .then(data => {
      const searchResults = data.data["Search"];
      res.render("results", { searchResults });
    })
})

app.listen(process.env.PORT, process.env.IP, () => {
  console.log("Movie app is running.");
})
