const _ = require("underscore");
const SessionModel = require("../models/Session");
let SessionController = {};

// Storing Sessions.
SessionController.storeSession = (req, res) => {
  let Session = new SessionModel(req.body);
  let createSession_Promise = Session.save();

  createSession_Promise
    .then(Session => {
      return res.status(201).json(Session);
    })
    .catch(err => {
      const DUPLICATE_KEY = 11000;
      return err.code === DUPLICATE_KEY
        ? res.status(400).json(err.errmsg)
        : res.status(500).json(err);
    });
};

// Retrieving Sessions.
SessionController.getAllSessions = (req, res) => {
  let getAllSessions_Promise = SessionModel.find({}).exec();
  getAllSessions_Promise
    .then(Sessions => {
      return res.status(200).json(Sessions);
    })
    .catch(err => {
      return res.status(500).json({ error: err });
    });
};

SessionController.getSessionById = (req, res) => {
  let SessionID = req.params.id;
  let getSessionById_Promise = SessionModel.findById(SessionID).exec();

  getSessionById_Promise
    .then(Session => {
      return Session
        ? res.status(200).json(Session)
        : res.status(404).json({
            error: `Can not find Session with id: ${SessionID}`
          });
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json({ error: err });
    });
};

SessionController.getSessionByCourseId = (req, res) => {
  let courseID = req.params.id;
  let getSessionById_Promise = SessionModel.find({"courseID":`${courseID}`}).exec();

  getSessionById_Promise
    .then(Session => {
      return Session
        ? res.status(200).json(Session)
        : res.status(404).json({
            error: `Can not find Session with id: ${courseID}`
          });
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json({ error: err });
    });
};

// Updating Sessions.
SessionController.updateSessionById = (req, res) => {
  console.log(req.body);
  let SessionID = req.params.id;
  let updateSessionById_Promise = SessionModel.findById(
    SessionID
  ).exec();
  updateSessionById_Promise
    .then(Session => {
      _.extend(Session, req.body);
      return Session.save();
    })
    .then(Session => {
      return res.status(201).json(Session);
    })
    .catch(err => {
      return res.status(500).json({ error: err.message });
    });
};

// Destroying Sessions.
SessionController.deleteSessionById = (req, res) => {
  let SessionID = req.params.id;
  let findByIdAndRemove_Promise = SessionModel.findByIdAndRemove(
    SessionID
  ).exec();

  findByIdAndRemove_Promise
    .then(Session => {
      return Session
        ? res.status(201).json(Session)
        : res
            .status(404)
            .json({ error: `No Session found with id: ${SessionID}` });
    })
    .catch(err => {
      console.log("Error: " + err.message);
      return res.status(500).json({ error: err.message });
    });
};

module.exports = SessionController;