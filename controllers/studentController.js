const db = require('../util/db-connection');

const addStudent = (req,res,next) => {
    
    const {email,name,age} = req.body;
    const insertQuery = `INSERT INTO students(email,name,age) VALUES(?,?,?)`;
    
    db.execute(insertQuery,[email,name,age],(err)=>{

        if(err){
            console.log(err);
            res.status(500).send(err.message);
            db.end();
            return;
        }

        console.log(`Student with name ${name} has been inserted`);
        res.status(200).send(`Student with the name ${name} has been successfully added`);
    })
}

const getStudents = (req,res,next) => {
    
    const selectQuery = `SELECT * FROM students`;

    db.execute(selectQuery,(err,result)=>{
        
        if(err){
            console.log(err);
            res.status(500).send(err.message);
            db.end();
        }
        

        res.json(result);

        
    })
    
};

const getStudentWithId = (req,res) => {

    const {id} = req.params;
    const selectQuery = `SELECT * FROM students WHERE id=?`;

    db.execute(selectQuery,[id],(err,result)=>{
          
        if(err){
            console.log(err);
            res.status(500).send(err.message);
            db.end();
            return;
        }

        if(result.length === 0){
            console.log('Student not found');
            res.status(404).send('Student not found');
            return;
        }

        res.json(result);

    })

};



const updateStudentDetails = (req,res,next) => {

    const {id} = req.params;
    const {name,email,age} = req.body;
    const updateQuery = `UPDATE students set name=?, email=?, age=? WHERE id=?`;

    db.execute(updateQuery,[name,email,age,id],(err,result)=>{

        if(err){
            console.log(err);
            res.status(500).send(err.message);
            db.end();
            return;
        }

        if(result.affectedRows === 0){
            console.log('Student not found');
            res.status(404).send('Student not found');
            return;
        }
        
        console.log('Student has been updated');
        res.status(200).send('Student has been updated');
    })

}

const deleteStudent = (req,res,next) => {

    const {id} = req.params;
    const deleteQuery = `DELETE FROM students WHERE id=? `;

    db.execute(deleteQuery,[id],(err,result)=>{

        if(err){
            console.log(err);
            res.status(500).send(err.message);
            db.end();
            return;
        }

        if(result.affectedRows === 0){
            console.log('student not found');
            res.status(404).send('Student not found');
            return;
        }
        
        console.log(`Student with id ${id} is deleted`);
        res.status(200).send(`Student with id ${id} is deleted.`);
    })
}

module.exports = {
    addStudent,
    getStudents,
    getStudentWithId,
    updateStudentDetails,
    deleteStudent
}