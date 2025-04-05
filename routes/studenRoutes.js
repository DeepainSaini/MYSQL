const express = require('express');
const router = express.Router();

const studentController = require('../controllers/studentController');

router.post('/add',studentController.addStudent);
router.get('/retrieve',studentController.getStudents);
router.get('/retrieve/:id',studentController.getStudentWithId);
router.put('/update/:id',studentController.updateStudentDetails);
router.delete('/delete/:id',studentController.deleteStudent);

module.exports = router;