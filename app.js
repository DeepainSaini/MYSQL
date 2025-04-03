const express  = require('express');
const mysql = require('mysql2');
const app  = express();

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'testdb'
})

connection.connect((err)=>{

    if(err){
        console.log(err);
        return;
    }

    console.log('connection has been created');

    const creationQuery = `create table Users (
        
         id INT AUTO_INCREMENT PRIMARY KEY,
         name VARCHAR(20),
         email VARCHAR(20)
    )`

    const creationQuery1 = `create table Buses (
        
        id INT AUTO_INCREMENT PRIMARY KEY,
        busNumber VARCHAR(20),
        totalSeats INT,
        availableSeats INT
    )`

    const creationQuery2 = `create table Bookings (
        
        id INT AUTO_INCREMENT PRIMARY KEY,
        seatNumber INT
    )`

    const creationQuery3 = `create table Payments (
        
        id INT AUTO_INCREMENT PRIMARY KEY,
        amountPaid VARCHAR(20),
        paymentStatus VARCHAR(20)
    )`


    connection.execute(creationQuery,(err)=>{

        if(err){
            console.log(err);
            connection.end();
            return;
        }

        console.log(' Users table has been created');
    });

    connection.execute(creationQuery1,(err)=>{

        if(err){
            console.log(err);
            connection.end();
            return;
        }

        console.log('Buses table has been created');
    });

    connection.execute(creationQuery2,(err)=>{

        if(err){
            console.log(err);
            connection.end();
            return;
        }

        console.log('Bookings table has been created');
    });

    connection.execute(creationQuery3,(err)=>{

        if(err){
            console.log(err);
            connection.end();
            return;
        }

        console.log('Payments table has been created');
    });
})

app.get('/',(req,res,next)=>{
    res.send('Hello World');
})

app.listen(3000,(err)=>{
    console.log('server is running');
});