const express = require("express");
const controller = require("../controllers/admins");//undefined for now
let router = express.Router();

module.exports = function(io) {
  // Get all admins.
  router.get("/", controller.getAllAdmins);
  
  // Create a new admin.
  router.post("/", controller.storeAdmin);
  
  // Deletes an admin with the specified ID.
  router.delete("/id/:id", controller.destroyById);
  
  // Get an admin by id
  router.get("/id/:id", controller.getAdminById);
  
  // Update admin by id
  router.put("/id/:id", controller.updateAdminById);

  return router;
};