const express = require('express');

const { getAllStudent, addStudent, deleteStudent,getAllStudentById, updateStudent } = require('./controller/userController');

const routes = express.Router();

routes.get('/student',getAllStudent);
routes.post('/student',addStudent);
routes.delete('/student/:id',deleteStudent);
routes.get('/student/:id',getAllStudentById);
routes.put('/student/:id',updateStudent);

module.exports = routes;
