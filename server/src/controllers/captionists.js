const _ = require("underscore");
const CaptionistModel = require("../models/captionist");
let CaptionistController = {};

// Storing Captionists.
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

// Retrieving Captionists.
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
              error: `Can not find Captionist with id: ${captionistID}`
            });
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json({ error: err });
    });
};

// Updating Captionists.
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

// Destroying Captionists.
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

module.exports = CaptionistController;