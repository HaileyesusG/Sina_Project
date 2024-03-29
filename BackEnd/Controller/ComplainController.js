const Complain = require("../Models/Complain");
const student = require("../Models/Registered_Student");
const course = require("../Models/Course");
//create complain

const createComplain = async (req, res) => {
  //payed student id
  const { id } = req.params;
  const { complainType, courseName, complainText } = req.body;
  try {
    const Student = await student.findById(id);
    if (!Student) {
      throw Error("no such student has been registred");
    }
    //
    if (Student.onAttendance === false) {
      throw Error("This student has not Payed yet");
    }
    const courses = await course.findOne({ courseName });
    if (!courses) {
      throw Error("no such course is existed");
    }
    const complaints = await Complain.create({
      complainType,
      complainText,
      courseName,
      firstname: Student.firstname,
      lastname: Student.lastname,
      batch_Id: Student.batch_Id,
      student_id: Student._id,
    });

    res.status(200).json(complaints);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createComplain,
};
