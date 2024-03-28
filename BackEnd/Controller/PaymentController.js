const payment = require("../Models/Payment");
const student = require("../Models/Registered_Student");
const batch = require("../Models/Batch");
const nodemailer = require("nodemailer");
const createPayment = async (req, res) => {
  //Registered_Student id
  const { id } = req.params;
  const registration_id=id
  //field(Computer science, Software enginerring)
  const { field } = req.body;
  const image1 = req.file;
  const receipt = image1.filename;
  const Student = await student.findById(id);
  //batch id
  const batch_Id = Student.batch_Id;
  const batchs = batch.findById(batch_Id);
  const batchName = batchs.batchName;
  const firstname = Student.firstname;
  const lastname = Student.lastname;
  const gender = Student.gender;
  const phonenumber = Student.phonenumber;
  const Payments = await payment.create({
    batchName,
    firstname,
    lastname,
    gender,
    phonenumber,
    receipt,
    field,
    registration_id
  });
  res.status(200).json(Payments);
};

//get All Payments

const getPayment = async (req, res) => {
  const Payments = await payment.find({});
  res.status(200).json(Payments);
};

//Approve Payment

const approvePayment=async(req,res)=>{
    //Registration Id
    const{id}=req.params;
    const Student=await student.findById(id)
    const email=Student.email;
    const{Sender_email,Sender_password}=req.body;

    const updateRegistedStudent=await student.findByIdAndUpdate(
        { _id: id },
        { onAttendance:true }
      );
    const latestUpdate=await student.findById(id)
      res.status(200).json(latestUpdate);
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
    to: email, // Recipient email address
    subject: "Hello from Admin" ,
    text: "You have been Approved. You can start class based on the schedule.",
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


}
module.exports = {
  createPayment,
  getPayment,
  approvePayment
};
