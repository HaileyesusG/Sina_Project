const course = require("../Models/Course");
const batch = require("../Models/Batch");
const teacher = require("../Models/Teacher");
const resource = require("../Models/Resource");
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

//get courses by teacher id with resources

const getCourseByTeacherIdWithResources=async(req,res)=>{
  let MyCourses=[]
  //teacher id
const{id}=req.params;
const response=await teacher.findById(id)
const Courses=response.courseName;
for(courseName of Courses)
{
  const Course=await course.findOne({courseName:courseName});
  MyCourses.push(Course);

}


const materials=await resource.find({});
const coursesWithMaterials = MyCourses.map((course) => {
  const relatedMaterials = materials.filter(
    (material) => material.course_Id.toString() === course._id.toString()
  );

  return {
    id: course._id,
    name: course.courseName,
    materials: relatedMaterials,
  };
});

res.status(200).json(coursesWithMaterials);
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
  getBatchByTeacherId,
  getCourseByTeacherIdWithResources
};
