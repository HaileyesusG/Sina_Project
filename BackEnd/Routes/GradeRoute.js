const { createGrade, updateGrade } = require("../Controller/GradeController");

const express = require("express");
const router = express.Router();
//   router.route("/getCourseByTeacherId/:id").get(getCourseByTeacherId);
//   router.route("/getBatchByTeacherId/:id").get(getBatchByTeacherId);
//   router.route("/getCourseByTeacherIdWithResources/:id").get(getCourseByTeacherIdWithResources);
router.route("/createGrade/:id").post(createGrade);
router.route("/updateGrade/:id").post(updateGrade);

module.exports = router;
