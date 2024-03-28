const mongoose = require("mongoose");
const paymentSchema = mongoose.Schema(
  {
    field: {
        type: String,
        required: [true, "Please enter field"],
      },

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

    batchName: {
      type: String,
      require,
    },
    registration_id:{
        type:mongoose.Schema.Types.ObjectId,
        require
    },
    receipt: {
      type: String,
      required: [true, "Please Add receipt"],
    },
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Payment", paymentSchema);
