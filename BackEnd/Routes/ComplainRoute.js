const { createComplain } = require("../Controller/ComplainController");

const express = require("express");
const router = express.Router();
//   router.route("/getCourseByTeacherId/:id").get(getCourseByTeacherId);
//   router.route("/getBatchByTeacherId/:id").get(getBatchByTeacherId);
//   router.route("/getCourseByTeacherIdWithResources/:id").get(getCourseByTeacherIdWithResources);
router.route("/createComplain/:id").post(createComplain);
//   router.route("/getCourse").post(getCourse);

module.exports = router;
