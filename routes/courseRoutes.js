const express = require('express');
const router = express.Router();

const courseController = require('../controllers/courseController');

router.post('/addcourses',courseController.addCourse);
router.post('/addstudentCourses',courseController.addStudentToCourses);

module.exports = router;