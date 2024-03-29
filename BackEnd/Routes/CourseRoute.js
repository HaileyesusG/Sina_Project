const {
  createCourse,
  getCourse,
  getCourseByTeacherId,
  getCourseByTeacherIdWithResources,
  getCoursesByStudent,
  getUngradedCoursesWmaterials
} = require("../Controller/CourseController");

const express = require("express");
const router = express.Router();
router.route("/getCourseByTeacherId/:id").get(getCourseByTeacherId);
router.route("/getCourseByTeacherIdWithResources/:id").get(getCourseByTeacherIdWithResources);
router.route("/createCourse").post(createCourse);
router.route("/getCourse").post(getCourse);
router.route("/getCoursesByStudent/:id").get(getCoursesByStudent);
router.route("/getUngradedCoursesWmaterials/:id").get(getUngradedCoursesWmaterials);

module.exports = router;
