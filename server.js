const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/time", (req, res) => {
  res.send(new Date().toISOString());
});

app.listen(3000);
