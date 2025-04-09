const express  = require('express');
const db = require('./util/db-connection');
const app  = express();

const studentRoutes = require('./routes/studenRoutes');
const courseRoutes = require('./routes/courseRoutes');

require('./models');

app.use(express.json());

app.use('/students',studentRoutes);
app.use('/courses',courseRoutes);

db.sync({force:true}).then(()=>{
    app.listen(3000,(err)=>{
        console.log('server is running');
    });

}).catch((err)=>{
    console.log(err);
})

