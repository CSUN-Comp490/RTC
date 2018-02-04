const express = require("express");
const controller = require("../controllers/sessions");
let router = express.Router();

module.exports = function(io) {
  
  // Create a new session.
  router.post("/", controller.storeSession);

  // Get all sessions
  router.get("/", controller.getAllSessions);
  //Get a session by id
  router.get("/id/:id", controller.getSessionById);
  // Get a session by course id
  router.get("/courseID/:id", controller.getSessionByCourseId);
  
  // Update session by id
  router.put("/id/:id", controller.updateSessionById);

  // Deletes an session with the specified ID.
  router.delete("/id/:id", controller.deleteSessionById);

  return router;
};