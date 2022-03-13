const mongoose = require("mongoose");

const studentsSchema = new mongoose.Schema(
  {
    roll_id: { type: Number, required: true },
    current_batch: { type: String, required: true },
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

const Students = mongoose.model("students", studentsSchema);
module.exports = Students;
