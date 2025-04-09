const Students = require('../models/student');
const IdentityCards = require('../models/identityCard');
const Departments = require('../models/department');
const Courses = require('../models/courses');
const StudentCourses = require('../models/studentCourses');

Students.hasOne(IdentityCards);
IdentityCards.belongsTo(Students);

Departments.hasMany(Students);
Students.belongsTo(Departments);

Students.belongsToMany(Courses,{through:StudentCourses});
Courses.belongsToMany(Students,{through:StudentCourses});


module.exports = {
    Students,
    IdentityCards,
    Departments,
    Courses,
    StudentCourses
}