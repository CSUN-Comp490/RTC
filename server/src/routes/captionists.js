const express = require("express");
const controller = require("../controllers/captionists");//undefined for now
let router = express.Router();

module.exports = function(io) {
  // Create a new captionist.
  router.post("/", controller.storeCaptionist);

  router.post("/login", controller.login)
    
  // Get all captionists.
  router.get("/", controller.getAllCaptionists);
  // Get an captionist by id
  router.get("/id/:id", controller.getCaptionistById);
  // Get an captionist by username
  router.get("/username/:username", controller.getCaptionistByUsername);
  
  // Update captionist by id
  router.put("/id/:id", controller.updateCaptionistById);
  // Update captionist by Username.
  router.put("/username/:username", controller.updateCaptionistByUsername);

  // Deletes an captionist with the specified ID.
  router.delete("/id/:id", controller.deleteCaptionistById);
  // Deletes an captionist with the specified Username.
  router.delete("/username/:username", controller.deleteCaptionistByUsername);
  
  return router;
  
};