const path = require("path");

const express = require("express");

const Users = require("../models/users.model");
const Students = require("../models/students.model");
const Evaluation = require("../models/evaluation.model");
const Submission = require("../models/submission.model");
const Batches = require("../models/batch.model");
const Results = require("../models/results.model");

const router = express.Router();

router.get("/submission/:evaluation_id/students", async (req, res) => {
  try {
    const students = await Students.findById(req.params.evaluation_id)
      .lean()
      .exec();

    return res.status(200).send(students);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
