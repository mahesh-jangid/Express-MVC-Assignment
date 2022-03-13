const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, reqyured: true },
    gender: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    type: { type: String, required: true },
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

const Users = mongoose.model("users", UsersSchema);

module.exports = Users;
