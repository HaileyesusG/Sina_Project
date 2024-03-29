const student = require("../Models/Registered_Student");
const course = require("../Models/Course");
//get Registered And Payed students

const getPayedRegistredStudent=async(req,res)=>{
    const students=await student.find({onAttendance:true});
    res.status(200).json(students);
}

//get Registered  students

const getRegistredStudent=async(req,res)=>{
    const students=await student.find({});
    res.status(200).json(students);
}

//get payed Registered  students based on course

const getStudentOnCourse=async(req,res)=>{
    const{courseName}=req.body;
    try{
        const courses=await course.findOne({courseName});
        if(!courses)
        {
            throw Error("Course is not existed  in the list");
        }
        const batch_Id=courses.batch_Id
        const students=await student.find({onAttendance:true,batch_Id:batch_Id});
        res.status(200).json(students);
    }
    catch(error)
    {
        res.status(400).json({message:error.message})
    }
   
}
module.exports={
    getPayedRegistredStudent,
    getRegistredStudent,
    getStudentOnCourse
}

