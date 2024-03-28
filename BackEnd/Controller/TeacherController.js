const teacher = require("../Models/Teacher");
const batch = require("../Models/Batch");
const course = require("../Models/Course");
const nodemailer = require("nodemailer");
//create Teacher

const createTeacher = async (req, res) => {
  const {
    email,
    password,
    firstname,
    lastname,
    gender,
    phonenumber,
    batchName,
    courseName,
  } = req.body;
  try {
    const exists = await teacher.findOne({ email });
    if (exists) {
      throw Error("email already in use");
    }
    const exists2 = await batch.findOne({ batchName });
    if (!exists2) {
      throw Error(" this batch does not exit");
    }
    const exists3 = await course.findOne({ courseName });
    if (!exists3) {
      throw Error(" this course does not exit");
    }
    const teachers = await teacher.create({
      email,
      password,
      firstname,
      lastname,
      gender,
      phonenumber,
      batchName,
      courseName,
    });
    res.status(200).json(teachers);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
const getTeacher = async (req, res) => {
  const Teachers = await teacher.find({});
  res.status(200).json(Teachers);
};
//Accept And send notification through email
const sendEmail = async (req, res) => {
  const { Sender_email, Sender_password, Receiver_email, firstname } = req.body;

  // Create a Nodemailer transporter using SMTP
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: Sender_email, // Sender email address
      pass: Sender_password, // Sender email password
    },
  });

  // Email message configuration
  const mailOptions = {
    from: Sender_email, // Sender email address
    to: Receiver_email, // Recipient email address
    subject: "Hello from " + firstname,
    text: "Your Complain has been Accepted. You can come to the office.",
  };

  // Send the email
  await transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error occurred:", error.message);
      res.status(500).send("Error occurred while sending email.");
    } else {
      console.log("Email sent successfully:", info.response);
      res.send("Email sent successfully.");
    }
  });
};
module.exports = {
  createTeacher,
  getTeacher,
  sendEmail,
};
