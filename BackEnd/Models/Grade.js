const mongoose = require("mongoose");
const gradeSchema = mongoose.Schema(
  {
    grade: {
      type: String,
      required: [true, "Please enter grade"],
    },
    student_id:{
        type:mongoose.Schema.Types.ObjectId,
    },
    course_id:{
      type:mongoose.Schema.Types.ObjectId,
  }
  },
  { timestamps: true }
);

module.exports = mongoose.model("grade", gradeSchema);
