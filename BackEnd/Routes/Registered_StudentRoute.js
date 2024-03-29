const {
    getPayedRegistredStudent,
    getRegistredStudent,
    getStudentOnCourse
  } = require("../Controller/Registered_StudentController");

  const express = require("express");
  const router = express.Router();
  router.route("/getPayedRegistredStudent").get(getPayedRegistredStudent);
  router.route("/getRegistredStudent").get(getRegistredStudent);
  router.route("/getStudentOnCourse").post(getStudentOnCourse);
  
  
  module.exports = router;
  