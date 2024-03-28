const {
  createTeacher,
  getTeacher,
  sendEmail,
} = require("../Controller/TeacherController");

const express = require("express");
const router = express.Router();
//router.route("/:id").get(GetApplicant);
router.route("/createTeacher").post(createTeacher);
router.route("/getTeacher").post(getTeacher);
router.route("/sendEmail").post(sendEmail);

module.exports = router;
