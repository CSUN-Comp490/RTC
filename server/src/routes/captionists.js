const express = require("express");
const controller = require("../controllers/captionists");//undefined for now
let router = express.Router();

module.exports = function(io) {
  // Get all captionists.
  router.get("/", controller.getAllCaptionists);
  
  // Create a new Captionist.
  router.post("/", controller.storeCaptionist);
  
  // Deletes an Captionist with the specified ID.
  router.delete("/id/:id", controller.deleteCaptionistById);
  
  // Get an Captionist by id
  router.get("/id/:id", controller.getCaptionistById);
  
  // Update Captionist by id
  router.put("/id/:id", controller.updateCaptionistById);

  return router;
};