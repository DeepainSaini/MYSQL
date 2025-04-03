const express  = require('express');
const mysql = require('mysql2');
const app  = express();

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

    const creationQuery = `create table students(
        
         id INT AUTO_INCREMENT PRIMARY KEY,
         name VARCHAR(20),
         emil VARCHAR(20)
    )`

    connection.execute(creationQuery,(err)=>{

        if(err){
            console.log(err);
            connection.end();
            return;
        }

        console.log('table has been created');
    });
})

app.get('/',(req,res,next)=>{
    res.send('Hello World');
})

app.listen(3000,(err)=>{
    console.log('server is running');
});