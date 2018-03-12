const _ = require("underscore");
const CaptionistModel = require("../models/captionist");
let CaptionistController = {};

//Create Captionists.
CaptionistController.storeCaptionist = (req, res) => {
  let captionist = new CaptionistModel(req.body);
  let createCaptionistPromise = captionist.save();

  createCaptionistPromise
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
CaptionistController.getAllCaptionists = (req, res) => {
  let getAllCaptionistsPromise = CaptionistModel.find({}).exec();
  getAllCaptionistsPromise
    .then(captionists => {
      return res.status(200).json(captionists);
    })
    .catch(err => {
      return res.status(500).json({ error: err });
    });
};

CaptionistController.getCaptionistById = (req, res) => {
  let captionistID = req.params.id;
  let getCaptionistByIdPromise = CaptionistModel.findById(captionistID).exec();

  getCaptionistByIdPromise
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
  let getCaptionistByUsernamePromise = CaptionistModel.findOne(
    {username: captionistUsername}).exec();

  getCaptionistByUsernamePromise
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
CaptionistController.updateCaptionistById = (req, res) => {
  let captionistID = req.params.id;
  let updateCaptionistByIdPromise = CaptionistModel.findById(
    captionistID
  ).exec();
  updateCaptionistByIdPromise
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
  let captionistUsername = req.params.username;
  let updateCaptionistByUsernamePromise = CaptionistModel.findOne(
    {username: captionistUsername}
  ).exec();
  updateCaptionistByUsernamePromise
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

// Delete Captionists.
//TODO: Delete Captionist by username
CaptionistController.deleteCaptionistById = (req, res) => {
  let captionistID = req.params.id;
  let findByIdAndRemovePromise = CaptionistModel.findByIdAndRemove(
    captionistID
  ).exec();

  findByIdAndRemovePromise
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
  let captionistUsername = req.params.username;
  let findByUsernameAndRemovePromise = CaptionistModel.findOneAndRemove(
    {usermname: captionistUsername}
  ).exec();

  findByUsernameAndRemovePromise
    .then(captionist => {
      return captionist
        ? res.status(201).json(captionist)
        : res
            .status(404)
            .json({ error: `No captionist found with username: ${captionistUsername}` });
    })
    .catch(err => {
      console.log("Error: " + err.message);
      return res.status(500).json({ error: err.message });
    });
};

module.exports = CaptionistController;