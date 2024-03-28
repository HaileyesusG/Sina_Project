const mongoose = require("mongoose");
const A_studentSchema = mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "Please enter first Name"],
    },
    lastname: {
      type: String,
      required: [true, "Please enter last Name"],
    },
    gender: {
      type: String,
      required: [true, "Please enter gender"],
    },
    phonenumber: {
      type: String,
      required: [true, "Please enter phone number"],
    },

    email: {
      type: String,
      required: [true, "Please enter email"],
    },
    password: {
      type: String,
      required: [true, "Please Add password"],
    },
    transcript: {
      type: String,
      required: [true, "Please Add transcript"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("A_Student", A_studentSchema);
