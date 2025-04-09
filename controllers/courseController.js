const db = require('../util/db-connection');
const Courses = require('../models/courses');
const Students = require('../models/student');

const addCourse = async (req,res) => {

    try{
        const {name} = req.body;
        const course = await Courses.create({
            name : name
        });

        res.status(201).json(course);

    } catch(error){
        console.log(error);
        res.status(500).json({message : 'unable to add'});
    }
}

const addStudentToCourses = async (req,res) => {

    try{
        const {studentId,courseIds} = req.body;
        const student = await Students.findByPk(studentId);
        const course = await Courses.findAll({
            where : {
                id : courseIds
            }
        })

        await student.addCourse(course);
        const updatedStudent = await Students.findByPk(studentId,{include:Courses});
        res.status(200).json(updatedStudent);
    } catch(error){
        console.log(error);
        res.status(500).json({message:'unable to add'});
    }
}

module.exports = {
    addCourse,
    addStudentToCourses
}
