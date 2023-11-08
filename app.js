const express = require("express");
const app = express();
const cors = require("cors");
const exerciseController = require('./controllers/exerciseController')

app.use(cors());
app.use(express.json());
app.use("/exercise", exerciseController);

app.get("/", (req, res) => {
  res.send("Welcome to the fitness app!");
});

app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

module.exports = app;
