const { createCourse, getCourse } = require("../Controller/CourseController");

const express = require("express");
const router = express.Router();
//router.route("/:id").get(GetApplicant);
router.route("/createCourse").post(createCourse);
router.route("/getCourse").post(getCourse);

module.exports = router;
