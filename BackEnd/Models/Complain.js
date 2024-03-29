const mongoose = require("mongoose");
const complainSchema = mongoose.Schema(
  {
    //mid , final
    complainType: {
      type: String,
      required: [true, "Please enter complainType"],
    },
    complainText: {
      type: String,
      default: "complain",
    },
    courseName: {
      type: String,
      required: [true, "Please enter course Name"],
    },
    batch_Id: {
      type: mongoose.Schema.Types.ObjectId,
      require,
    },
    firstname: {
      type: String,
      required: [true, "Please enter first Name"],
    },
    lastname: {
      type: String,
      required: [true, "Please enter last Name"],
    },
    student_id: {
      type: mongoose.Schema.Types.ObjectId,
      require,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("complain", complainSchema);
