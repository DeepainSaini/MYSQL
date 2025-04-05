const {Sequelize,DataTypes} = require('sequelize');
const sequelize = require('../util/db-connection');

const students = sequelize.define('students',{

    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false
    },

    name : {
       type : DataTypes.STRING,
       allowNull : false
    },

    email : {
       type : DataTypes.STRING,
       allowNull : false
    },

    age : {
       type : DataTypes.INTEGER,
       allowNull : false
    }
})

module.exports = students;