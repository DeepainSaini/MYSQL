const {Sequelize,DataTypes} = require('sequelize');
const sequelize = require('../util/db-connection');

const Departments = sequelize.define('department',{

    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull : true
    },

    name : {
        type : DataTypes.STRING,
        allowNull : false
    }
})

module.exports = Departments;