const applicant = require("../Models/ApplicantStudents");
const student = require("../Models/Registered_Student");
const batch = require("../Models/Batch");
const nodemailer = require("nodemailer");
//create applicant

const createApplicant = async (req, res) => {
    const {
        email,
        password,
        firstname,
        lastname,
        gender,
        phonenumber,
      } = req.body;
  const image1 = req.file;
  const transcript = image1.filename;

  const applicants = await applicant.create({
    email,
        password,
        firstname,
        lastname,
        gender,
        phonenumber,
        transcript
  });
  res.status(200).json(applicants);
};

//get All Applicant
const getApplicant = async (req, res) => {
  const applicants = await applicant.find({});
  res.status(200).json(applicants);
};


//Approve Applicant
const approveApplicant=async(req,res)=>{
    const {id}=req.params;
    const{batchName,Sender_email, Sender_password}=req.body;
    
    const Applicant=await applicant.findById(id);
      const  firstname=Applicant.firstname;
      const  lastname=Applicant.lastname;
      const  gender=Applicant.gender;
      const  phonenumber=Applicant.phonenumber;
      const  transcript=Applicant.transcript;
      const  email=Applicant.email;
      const password=Applicant.password;
      //finding batch
      const batchs=await batch.findOne({batchName});
      const batch_Id=batchs._id

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
    text: "You have  been Approved. You can pay the reqiured amount and start class.",
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


    const students=await student.create({
        firstname,
        lastname,
        gender,
        phonenumber,
        email,
        password,
        batch_Id,
        transcript,
    });
    const deleteApplicant=await applicant.findOneAndDelete({_id:Applicant._id})
    res.status(200).json(students)
}


//reject Applicant
const rejectApplicant=async(req,res)=>{
  //applicant id
    const {id}=req.params;
    const{Sender_email, Sender_password}=req.body;

    const Applicant=await applicant.findById(id);
    const  email=Applicant.email;

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
    text: "Sorry! Your have not been  Approve. You can come to the office and we can dicuss",
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


    const deleteApplicant=await applicant.findOneAndDelete({_id:Applicant._id})
}
module.exports = {
  createApplicant,
  getApplicant,
  approveApplicant,
  rejectApplicant
};
