const _ = require("underscore");
const CaptionistModel = require("../models/captionist");
let CaptionistController = {};

//Create Captionists.
CaptionistController.storeCaptionist = (req, res) => {
  let captionist = new CaptionistModel(req.body);
  let createCaptionist_Promise = captionist.save();

  createCaptionist_Promise
    .then(captionist => {
      return res.status(201).json(captionist);
    })
    .catch(err => {
      const DUPLICATE_KEY = 11000;
      return err.code === DUPLICATE_KEY
        ? res.status(400).json(err.errmsg)
        : res.status(500).json(err.errmsg);
    });
};

//Retrieve Captionists.
//TODO: Retrieve Captionist by username
CaptionistController.getAllCaptionists = (req, res) => {
  let getAllCaptionists_Promise = CaptionistModel.find({}).exec();
  getAllCaptionists_Promise
    .then(captionists => {
      return res.status(200).json(captionists);
    })
    .catch(err => {
      return res.status(500).json({ error: err });
    });
};

CaptionistController.getCaptionistById = (req, res) => {
  let captionistID = req.params.id;
  let getCaptionistById_Promise = CaptionistModel.findById(captionistID).exec();

  getCaptionistById_Promise
    .then(captionist => {
      return captionist
        ? res.status(200).json(captionist)
        : res
            .status(404)
            .json({
              error: `Cannot find Captionist with id: ${captionistID}`
            });
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json({ error: err });
    });
};

CaptionistController.getCaptionistByUsername = (req, res) => {
  let captionistUsername = req.params.username;
  let getCaptionistByUsername_Promise = CaptionistModel.findOne(
    {username: captionistUsername}).exec();

  getCaptionistByUsername_Promise
    .then(captionist => {
      return captionist
        ? res.status(200).json(captionist)
        : res
            .status(404)
            .json({
              error: `Cannot find Captionist with username: ${captionistUsername}`
            });
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json({ error: err });
    });
};

// Update Captionists.
//TODO: Update Captionist by username
CaptionistController.updateCaptionistById = (req, res) => {
  let captionistID = req.params.id;
  let updateCaptionistById_Promise = CaptionistModel.findById(
    captionistID
  ).exec();
  updateCaptionistById_Promise
    .then(captionist => {
      _.extend(captionist, req.body);
      return captionist.save();
    })
    .then(captionist => {
      return res.status(201).json(captionist);
    })
    .catch(err => {
      return res.status(500).json({ error: err.message });
    });
};

CaptionistController.updateCaptionistByUsername = (req, res) => {
  //TODO
};

// Delete Captionists.
//TODO: Delete Captionist by username
CaptionistController.deleteCaptionistById = (req, res) => {
  let captionistID = req.params.id;
  let findByIdAndRemove_Promise = CaptionistModel.findByIdAndRemove(
    captionistID
  ).exec();

  findByIdAndRemove_Promise
    .then(captionist => {
      return captionist
        ? res.status(201).json(captionist)
        : res
            .status(404)
            .json({ error: `No captionist found with id: ${captionistID}` });
    })
    .catch(err => {
      console.log("Error: " + err.message);
      return res.status(500).json({ error: err.message });
    });
};

CaptionistController.deleteCaptionistByUsername = (req, res) => {
  //TODO
};

module.exports = CaptionistController;