const db = require('../util/db-connection');

const addEntries = (req,res,next) => {
    
    const {email,name} = req.body;
    const insertQuery = `INSERT INTO students(email,name) VALUES(?,?)`;
    
    db.execute(insertQuery,[email,name],(err)=>{

        if(err){
            console.log(err);
            res.status(500).send(err.message);
            db.end();
        }

        console.log('value has been inserted');
        res.status(200).send(`Student with the name ${name} has been successfully added`);
    })
}

const updateEntries = (req,res,next) => {

    const {id} = req.params;
    const {name} = req.body;
    const updateQuery = `UPDATE students set name=? WHERE id=?`;

    db.execute(updateQuery,[name,id],(err,result)=>{

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

const deleteEntry = (req,res,next) => {

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
    addEntries,
    updateEntries,
    deleteEntry
}