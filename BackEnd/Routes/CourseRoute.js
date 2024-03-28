const { createCourse, getCourse,getCourseByTeacherId,getBatchByTeacherId } = require("../Controller/CourseController");

const express = require("express");
const router = express.Router();
router.route("/getCourseByTeacherId/:id").get(getCourseByTeacherId);
router.route("/getBatchByTeacherId/:id").get(getBatchByTeacherId);
router.route("/createCourse").post(createCourse);
router.route("/getCourse").post(getCourse);

module.exports = router;
