const mongoose = require("mongoose");

const batchSchema = new mongoose.Schema(
  {
    batch_name: { type: String, required: true },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    updateddAt: {
      type: Date,
      default: Date.now(),
    },
  },

  {
    versionKey: false,
    timestamps: true,
  }
);

const Batch = mongoose.model("batch", batchSchema);

module.exports = Batch;
