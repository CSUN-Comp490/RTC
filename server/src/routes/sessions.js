const express = require("express");
const controller = require("../controllers/sessions");
let router = express.Router();

module.exports = function(io) {
  // Get all sessions

  router.get("/", controller.getAllSessions);
  // Create a new session.
  router.post("/", controller.storeSession);
  
  // Deletes an session with the specified ID.
  router.delete("/id/:id", controller.destroyById);
  
  //Get a session by id
  router.get("/id/:id", controller.getSessionById);
  
  // Get a session by course id
  router.get("/courseID/:id", controller.getSessionByCourseId);
  
  // Update session by id
  router.put("/id/:id", controller.updateSessionById);

  return router;
};