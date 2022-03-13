const express = require("express");

const productsController = require("./controllers/attempedevalstudents.controller.js");

const app = express();

const Users = require("../models/users.model");
const Students = require("./controllers/attempedevalstudents.controllers");
const Evaluation = require("../models/evaluation.model");
const Submission = require("../models/submission.model");
const Batches = require("../models/batch.model");
const Results = require("../models/results.model");

app.use(express.json());

app.use("/users", Users);
app.use("/Students", Students);
app.use("/Evaluation", Evaluation);
app.use("/Submission", Submission);
app.use("/Batches", Batches);
app.use("/Results", Results);

module.exports = app;
