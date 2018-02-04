const _ = require("underscore");
const AdminModel = require("../models/admin");
let AdminController = {};

// Create Admins.
AdminController.storeAdmin = (req, res) => {
  let admin = new AdminModel(req.body);
  let createAdmin_Promise = admin.save();

  createAdmin_Promise
    .then(admin => {
      return res.status(201).json(admin);
    })
    .catch(err => {
      const DUPLICATE_KEY = 11000;
      return err.code === DUPLICATE_KEY
        ? res.status(400).json(err.errmsg)
        : res.status(500).json(err.errmsg);
    });
};

// Retrieve Admins.
//TODO: Retrieve Admin by username
AdminController.getAllAdmins = (req, res) => {
  let getAllAdmins_Promise = AdminModel.find({}).exec();
  getAllAdmins_Promise
    .then(admins => {
      return res.status(200).json(admins);
    })
    .catch(err => {
      return res.status(500).json({ error: err });
    });
};

AdminController.getAdminById = (req, res) => {
  let adminID = req.params.id;
  let getAdminById_Promise = AdminModel.findById(adminID).exec();

  getAdminById_Promise
    .then(admin => {
      return admin
        ? res.status(200).json(admin)
        : res
            .status(404)
            .json({ error: `Can not find Admin with id: ${adminID}` });
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json({ error: err });
    });
};

AdminController.getAdminByUsername = (req, res) => {
  //TODO
};

// Update Admins.
//TODO: Update Admin by username
AdminController.updateAdminById = (req, res) => {
  let adminID = req.params.id;
  let updateAdminById_Promise = AdminModel.findById(adminID).exec();
  updateAdminById_Promise
    .then(admin => {
      _.extend(admin, req.body);
      return admin.save();
    })
    .then(admin => {
      return res.status(201).json(admin);
    })
    .catch(err => {
      return res.status(500).json({ error: err.message });
    });
};

AdminController.updateAdminByUsername = (req, res) => {
  //TODO
};

// Delete Admins.
//TODO: Delete Admin by username
AdminController.deleteAdminById = (req, res) => {
  let adminID = req.params.id;
  let findByIdAndRemove_Promise = AdminModel.findByIdAndRemove(adminID).exec();

  findByIdAndRemove_Promise
    .then(admin => {
      return admin
        ? res.status(201).json(admin)
        : res.status(404).json({ error: `No Admin found with id: ${adminID}` });
    })
    .catch(err => {
      console.log("Error: " + err.message);
      return res.status(500).json({ error: err.message });
    });
};

AdminController.deleteAdminByUsername = (req, res) => {
  //coming soon
};

module.exports = AdminController;