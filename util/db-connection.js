const mysql = require('mysql2');

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '964999',
    database : 'testdb'
})

connection.connect((err)=>{

    if(err){
        console.log(err);
        return;
    }

    console.log('connection has been created');

    const creationQuery = `create table IF NOT EXISTS students (
        
         id INT AUTO_INCREMENT PRIMARY KEY,
         name VARCHAR(20),
         email VARCHAR(20),
         age INT
    )`


    connection.execute(creationQuery,(err)=>{

        if(err){
            console.log(err);
            connection.end();
            return;
        }

        console.log(' students table has been created');
    });

})

module.exports = connection;