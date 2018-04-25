const express = require("express");
const controller = require("../controllers/students");
let router = express.Router();

module.exports = function(io) {
  // Create a new student.
  router.post("/", controller.storeStudent);
    
  router.post("/login", controller.login);

  // Get all students.
  router.get("/", controller.getAllStudents);
  // Get an student by id
  router.get("/id/:id", controller.getStudentById);
  // Get an student by username
  router.get("/username/:username", controller.getStudentByUsername);
  // Get an student by email
  router.get("/email/:email", controller.getStudentByEmail);

  // Update student by id
  router.put("/id/:id", controller.updateStudentById);
  // Update student by Username.
  router.put("/username/:username", controller.updateStudentByUsername);

  // Deletes an student with the specified ID.
  router.delete("/id/:id", controller.deleteStudentById);
  // Deletes a student with the specified Username.
  router.delete("/username/:username", controller.deleteStudentByUsername);
  
  return router;
};