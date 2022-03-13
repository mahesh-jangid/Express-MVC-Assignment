const express = require("express");

const productsController = require("./controllers/attempedevalstudents.controller.js");

const app = express();

const Students = require("./controllers/attempedevalstudents.controllers");

app.use(express.json());

app.use("/Students", Students);

module.exports = app;
