const course = require("../Models/Course");
const batch = require("../Models/Batch");
const teacher = require("../Models/Teacher");
//create course

const createCourse = async (req, res) => {
  const { courseName, batchName } = req.body;
  try {
    const exists = await course.findOne({ courseName });
    if (exists) {
      throw Error("Course already in use");
    }
    const Batch = await batch.findOne({ batchName });
    if (!Batch) {
      throw Error("this batch does not exist. please enter valid Batch");
    }
    //finding batch Id for each courses by the given batch name(unique)

    const batch_Id = Batch._id;
    const courses = await course.create({
      courseName,
      batch_Id,
    });
    res.status(200).json(courses);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
const getCourse = async (req, res) => {
  const { batchName } = req.body;

  const Batch = await batch.findOne({ batchName });
  const batch_Id = Batch._id;
  const courses = await course.findById(batch_Id);
  res.status(200).json(courses);
};
//get courses by teacher id

const getCourseByTeacherId=async(req,res)=>{
  //teacher id
const{id}=req.params;
const response=await teacher.findById(id)
const Courses=response.courseName;
res.status(200).json(Courses);//Courses are Array
}

//get batches by teacher id

const getBatchByTeacherId=async(req,res)=>{
  //teacher id
const{id}=req.params;
const response=await teacher.findById(id)
const Batches=response.batchName;
res.status(200).json(Batches);//Batches are Array
}


module.exports = {
  createCourse,
  getCourse,
  getCourseByTeacherId,
  getBatchByTeacherId
};
