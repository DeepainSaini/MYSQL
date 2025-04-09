const express  = require('express');
const db = require('./util/db-connection');
const app  = express();

const studentRoutes = require('./routes/studenRoutes');

require('./models');

app.use(express.json());

app.use('/students',studentRoutes);

db.sync({force:true}).then(()=>{
    app.listen(3000,(err)=>{
        console.log('server is running');
    });

}).catch((err)=>{
    console.log(err);
})

