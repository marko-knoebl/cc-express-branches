const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/random", (req, res) => {
  console.log(req.query);
  res.send(String(Math.floor(Math.random() * 10)));
});

app.listen(3000);
