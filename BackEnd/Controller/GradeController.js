const Grade = require("../Models/Grade");
const student = require("../Models/Registered_Student");
const course = require("../Models/Course");
//create grade

const createGrade=async(req,res)=>{
    //payed student id
    const{id}=req.params;
    const {grade,courseName}=req.body;
    try{
        const Student=await student.findById(id);
        if(!Student)
        {
            throw Error("no such student has been registred")
        }
        //
        if(Student.onAttendance===false)
        {
            throw Error("This student has not Payed yet")
        }
        const courses=await course.findOne({courseName});
        if(!courses)
        {
            throw Error("no such course is existed")
        }
        const course_id=courses._id
        const Grades=await Grade.create({
            grade,
            student_id:id,
            course_id
    
        })
        res.status(200).json(Grades)
    }
    catch(error)
    {
        res.status(400).json({message:error.message})
    }
    
}
module.exports={
    createGrade
}