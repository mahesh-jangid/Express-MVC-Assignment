const mongoose = require("mongoose");

const ResultSchema = new mongoose.Schema(
  {
    submission_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "submission",
      required: true,
    },
  },

  {
    versionKey: false,
    timestamps: true,
  }
);

const Result = mongoose.model("result", ResultSchema);

module.exports = Result;
