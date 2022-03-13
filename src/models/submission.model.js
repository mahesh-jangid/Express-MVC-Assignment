const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema(
  {
    evaluation_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "evaluation",
      required: true,
    },
    student_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    marks: { type: Number },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    updatedAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Submissions = mongoose.model("submission", submissionSchema);
module.exports = Submissions;
