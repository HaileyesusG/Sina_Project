const mongoose = require("mongoose");
const batchSchema = mongoose.Schema(
  {
    batchName: {
      type: String,
      required: [true, "Please enter batch Name"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("batch", batchSchema);
