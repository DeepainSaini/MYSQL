const express  = require('express');
const db = require('./util/db-connection');
const app  = express();

const studentRoutes = require('./routes/studenRoutes');

app.use(express.json());

app.use('/students',studentRoutes);


app.get('/',(req,res,next)=>{
    res.send('Hello World');
})

app.listen(3000,(err)=>{
    console.log('server is running');
});