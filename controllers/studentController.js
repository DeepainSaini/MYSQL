const db = require('../util/db-connection');
const Students = require('../models/student');
const IdentityCard = require('../models/identityCard');
const { Departments } = require('../models');

const addStudent = async (req,res,next) => {
    
    try{
       
        const {name,email,age} = req.body;
        const student = await Student.create({
            name : name,
            email : email,
            age : age
        });

        res.status(200).send(`student with name: ${name} has been added`);

    } catch(error){
        console.log(error);
         res.status(500).send('Unable to make entry');
    }
}

const addValuesToStudentAndIdentityCardAndDepartment = async (req,res) => {

    try{
        const department = await Departments.create(req.body.department);
        const student = await Students.create({
            ...req.body.student,
            departmentId : department.id
        });
        const idCard = await IdentityCard.create({
            ...req.body.identityCard,
            studentId : student.id
        })
        

        res.status(200).json({department,student,idCard});
    } catch(error){
        console.log(error);
        res.status(500).json({message : 'error while posting'});
    }
}



const getStudents = async (req,res,next) => {
    
    try{
       
        const student = await Student.findAll();
        
        res.status(200).json(student);

    } catch(error){
        console.log(error);
         res.status(500).send('Unable to retrieve');
    }
    
};

const getStudentWithId = async (req,res) => {

    try{
        
        const {id} = req.params;
        const student = await Student.findByPk(id);
        if(!student){
            res.status(404).send('student not found');
        }

        res.status(200).json(student);

    } catch(error){
        console.log(error);
         res.status(500).send('Unable to retrieve');
    }

};



const updateStudentDetails = async (req,res,next) => {

       
    try{
        
        const {id} = req.params;
        const {name,email,age} = req.body;
        const student = await Student.findByPk(id);

        if(!student){
            res.status(500).send('student not found');
        }
        student.name = name;
        student.email = email;
        student.age = age;
        await student.save();

        res.status(200).send(`student has been updated`);

    } catch(error){
        console.log(error);
         res.status(500).send('Unable to update');
    }
}

const deleteStudent = async (req,res,next) => {

    try{
        
        const {id} = req.params;
        const student = await Student.destroy({
            where : {id : id}
        });

        if(!student){
            res.status(404).send('user not found');
        }

        res.status(200).send(`user with the id: ${id} is deleted`);

    } catch(error){
        console.log(error);
         res.status(500).send('Unable to delete');
    }
}

module.exports = {
    addStudent,
    getStudents,
    getStudentWithId,
    updateStudentDetails,
    deleteStudent,
    addValuesToStudentAndIdentityCardAndDepartment
}