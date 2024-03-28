const mongoose = require("mongoose");
const studentSchema = mongoose.Schema(
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
    batch_Id: {
      type: mongoose.Schema.Types.ObjectId,
      require,
    },
    transcript: {
      type: String,
      required: [true, "Please Add transcript"],
    },
    onAttendance:{
      type:Boolean,
      default:false
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", studentSchema);
