const _ = require("underscore");
const AdminModel = require("../models/admin");
let AdminController = {};

// Create Admins.
AdminController.storeAdmin = (req, res) => {
  let admin = new AdminModel(req.body);
  let createAdminPromise = admin.save();

  createAdminPromise
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
AdminController.getAllAdmins = (req, res) => {
  let getAllAdminsPromise = AdminModel.find({}).exec();
  getAllAdminsPromise
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

  getAdminByIdPromise
    .then(admin => {
      return admin
        ? res.status(200).json(admin)
        : res
            .status(404)
            .json({ error: `Cannot find Admin with id: ${adminID}` });
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json({ error: err });
    });
};

AdminController.getAdminByUsername = (req, res) => {
  let adminUsername = req.params.username;
  let getAdminByUsernamePromise = AdminModel.findOne({username: adminUsername}).exec();

  getAdminByUsernamePromise
    .then(admin => {
      return admin
        ? res.status(200).json(admin)
        : res
            .status(404)
            .json({ error: `Cannot find Admin with username: ${adminUsername}` });
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json({ error: err });
    });
};

// Update Admins.
AdminController.updateAdminById = (req, res) => {
  let adminID = req.params.id;
  let updateAdminByIdPromise = AdminModel.findById(adminID).exec();
  updateAdminByIdPromise
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
  let adminUsername = req.params.username;
  let updateAdminByUsernamePromise = AdminModel.findOne({username: adminUsername}).exec();
  updateAdminByUsernamePromise
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

// Delete Admins.
AdminController.deleteAdminById = (req, res) => {
  let adminID = req.params.id;
  let findByIdAndRemovePromise = AdminModel.findByIdAndRemove(adminID).exec();

  findByIdAndRemovePromise
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