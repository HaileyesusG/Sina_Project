const {
  createTeacher,
  getTeacher,
  sendEmail,
  addCourseForTeacher,
  addBatchForTeacher
} = require("../Controller/TeacherController");

const express = require("express");
const router = express.Router();
router.route("/addCourseForTeacher/:id").post(addCourseForTeacher);
router.route("/addBatchForTeacher/:id").post(addBatchForTeacher);
router.route("/createTeacher").post(createTeacher);
router.route("/getTeacher").post(getTeacher);
router.route("/sendEmail").post(sendEmail);

module.exports = router;
