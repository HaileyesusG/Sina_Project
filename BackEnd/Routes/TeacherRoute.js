const {
  createTeacher,
  getTeacher,
  sendEmail,
  addBatchAndCourseForTeacher,
} = require("../Controller/TeacherController");

const express = require("express");
const router = express.Router();
router
  .route("/addBatchAndCourseForTeacher/:id")
  .post(addBatchAndCourseForTeacher);
router.route("/createTeacher").post(createTeacher);
router.route("/getTeacher").post(getTeacher);
router.route("/sendEmail").post(sendEmail);

module.exports = router;
