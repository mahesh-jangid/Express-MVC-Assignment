const mongoose = require("mongoose");

const EvaluationSchema = new mongoose.Schema(
  {
    date_of_evaluation: { type: Date, required: true },
    instructor: {
      ref: "users",
      required: true,
    },
    batch_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "batch",
      required: true,
    },
  },
  {
    versionKey: false,

    timestamps: true,
  }
);

const Evaluation = mongoose.model("evaluation", EvaluationSchema);

module.exports = Evaluation;
