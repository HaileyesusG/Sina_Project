const {
    createApplicant,
    getApplicant,
    deleteApplicant,
    approveApplicant,
    rejectApplicant
  } = require("../Controller/ApplicantStudentController");
  
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
  router.route("/createApplicant").post(upload, createApplicant);
  router.route("/getApplicant").get(getApplicant);
 
  router.route("/:id").post(approveApplicant);
  router.route("/:id").delete(rejectApplicant);
  
  module.exports = router;
  