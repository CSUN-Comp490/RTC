const express = require("express");
const controller = require("../controllers/classes");
let router = express.Router();

module.exports = function(io) {

  // Create a new class.
  router.post("/", controller.storeClass);

  // Get all classes.
  router.get("/", controller.getAllClasses);
  // Get an course by id
  router.get("/id/:id", controller.getClassById);
  // Get a class by course id
  router.get("/courseid/:id", controller.getClassByCourseId);  
  
  // Update course by id
  router.put("/id/:id", controller.updateClassById);

  // Deletes an course with the specified ID.
  router.delete("/id/:id", controller.deleteClassById);
  

  return router;
};
