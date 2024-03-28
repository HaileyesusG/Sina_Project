const mongoose = require("mongoose");
const courseSchema = mongoose.Schema(
  {
    courseName: {
      type: String,
      required: [true, "Please enter course Name"],
    },
    batch_Id: {
      type: mongoose.Schema.Types.ObjectId,
      require,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("course", courseSchema);
