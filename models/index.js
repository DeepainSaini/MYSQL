const Students = require('../models/student');
const IdentityCards = require('../models/identityCard');
const Departments = require('../models/department');

Students.hasOne(IdentityCards);
IdentityCards.belongsTo(Students);

Departments.hasMany(Students);
Students.belongsTo(Departments);

module.exports = {
    Students,
    IdentityCards,
    Departments
}