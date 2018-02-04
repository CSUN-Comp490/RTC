const express = require("express");
const controller = require("../controllers/admins");//undefined for now
let router = express.Router();

module.exports = function(io) {

  // Create a new admin.
  router.post("/", controller.storeAdmin);
  
  // Get all admins.
  router.get("/", controller.getAllAdmins);
  // Get an admin by id
  router.get("/id/:id", controller.getAdminById);
  // Get an admin by username
  router.get("/username/:username", controller.getAdminByUsername);
  
  // Update admin by id
  router.put("/id/:id", controller.updateAdminById);
  // Update admin by Username.
  router.put("/username/:username", controller.updateAdminByUsername);

  // Deletes an admin with the specified ID.
  router.delete("/id/:id", controller.deleteAdminById);
  // Deletes an admin with the specified Username.
  router.delete("/username/:username", controller.deleteAdminByUsername);

  return router;
};