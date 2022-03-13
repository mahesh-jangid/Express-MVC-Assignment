const express = require("express");

const app = express();

const Students = require("./controllers/attempedevalstudents.controllers");

app.use(express.json());

app.use("/students", Students);

module.exports = app;
