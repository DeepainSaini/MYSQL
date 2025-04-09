const {Sequelize,DataTypes} = require('sequelize');
const sequelize = require('../util/db-connection');

const IdentityCards = sequelize.define('identityCard',{

    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull : true
    },

    cardNo : {
        type : DataTypes.INTEGER,
        unique : true,
        allowNull : false
    }
})

module.exports = IdentityCards;