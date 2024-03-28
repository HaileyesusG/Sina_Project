const {
    createPayment,
  getPayment,
  approvePayment,
  } = require("../Controller/PaymentController");
  
  const multer = require("multer");
  
  const Storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads");
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + "_" + file.originalname);
    },
  });
  const upload = multer({
    storage: Storage,
  }).single("testImage");
  
  const express = require("express");
  const router = express.Router();
  //router.route("/:id").get(GetApplicant);
  router.route("/createPayment/:id").post(upload, createPayment);
  router.route("/getPayment").post(getPayment);
  router.route("/approvePayment/:id").post(approvePayment);
  
  module.exports = router;
  