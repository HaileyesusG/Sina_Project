require("dotenv").config();
const { urlencoded } = require("express");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const teacher = require("./Routes/TeacherRoute");
const course = require("./Routes/CourseRoute");
const batch = require("./Routes/BatchRoute");
const resource = require("./Routes/ResourceRoute");
const applicant = require("./Routes/ApplicantRoute");
const payment = require("./Routes/PaymentRoute");
const registred = require("./Routes/Registered_StudentRoute");
const grade = require("./Routes/GradeRoute");
const complain = require("./Routes/ComplainRoute");
const dbConnect = require("./Config/dbConnection");
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
dbConnect();
app.use(bodyParser.json());
app.use(express.json());
app.use("/Api/teacher", teacher);
app.use("/Api/course", course);
app.use("/Api/batch", batch);
app.use("/Api/resource", resource);
app.use("/Api/applicant", applicant);
app.use("/Api/payment", payment);
app.use("/Api/registred", registred);
app.use("/Api/grade", grade);
app.use("/Api/complain", complain);

app.use(urlencoded({ extended: true }));
app.listen(port, () => {
  console.log(`i am in ${port}`);
});
