const _ = require("underscore");
const StudentModel = require("../models/student");
const jwt = require('jsonwebtoken')
const config = require('../config/config')
let StudentController = {};

// Signs a user with jwt to return a jwt token
function jwtSignUser(user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

StudentController.login = (req, res) => {
  let studentEmail = req.body.email;
  let getStudentByEmailPromise = StudentModel.findOne({ email: studentEmail }).exec();
  console.log('Im in the student login')
  getStudentByEmailPromise
    .then(student => {
      // console.log(student);
      return student
        // ? res.status(200).json({student: student})
        ? res.status(200).json({
          email: student.email, 
          password: student.password,
          id: student.id, 
          classes: student.classes, 
          username: student.username, 
          name: student.name, 
          token: 'student'
        })
        : res.status(404)
          .json({ error: `Not valid login with email: ${studentEmail}` });
        
    })
    .catch(err => {
      // console.log(err);
      return res.status(500).json({ error: err });
    });
}

//Create students.
StudentController.storeStudent = (req, res) => {
  let student = new StudentModel(req.body);
  let createStudentPromise = student.save();

  createStudentPromise
    .then(student => {
      return res.status(201).json(student);
    })
    .catch(err => {
      console.log(err)
      const DUPLICATE_KEY = 11000;
      return err.code === DUPLICATE_KEY
        ? res.status(400).json(err.errmsg)
        : res.status(500).json(err.errmsg);
    });
};

// Retrieve Students.
StudentController.getAllStudents = (req, res) => {
  let getAllStudentsPromise = StudentModel.find({}).exec();
  getAllStudentsPromise
    .then(students => {
      return res.status(200).json(students);
    })
    .catch(err => {
      return res.status(500).json({ error: err });
    });
};

StudentController.getStudentById = (req, res) => {
  let studentID = req.body.id;
  let getStudentByIdPromise = StudentModel.findById(studentID).exec();

  getStudentByIdPromise
    .then(student => {
      return student
        ? res.status(200).json(student)
        : res
            .status(404)
            .json({ error: `Cannot find student with id: ${studentID}` });
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json({ error: err });
    });
};

StudentController.getStudentByUsername = (req, res) => {
  let studentUsername = req.body.username;
  let getStudentByUsernamePromise = StudentModel.findOne({username: studentUsername}).exec();

  getStudentByUsernamePromise
    .then(student => {
      return student
        ? res.status(200).json(student)
        : res
            .status(404)
            .json({ error: `Cannot find student with username: ${studentUsername}` });
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json({ error: err });
    });
};

StudentController.getStudentByEmail = (req, res) => {
  let studentEmail = req.body.email;
  let getStudentByEmailPromise = StudentModel.findOne({email: studentEmail}).exec();

  getStudentByEmailPromise
    .then(student => {
      return student
        ? res.status(200).json(student)
        : res.status(404)
             .json({ error: `Cannot find student with email: ${studentEmail}` });
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json({ error: err });
    });
};

// Update students.
StudentController.updateStudentById = (req, res) => {
  let studentID = req.body.id;
  let updateStudentByIdPromise = StudentModel.findById(studentID).exec();
  updateStudentByIdPromise
    .then(student => {
      _.extend(student, req.body);
      return student.save();
    })
    .then(student => {
      return res.status(201).json(student);
    })
    .catch(err => {
      return res.status(500).json({ error: err.message });
    });
};

StudentController.updateStudentByUsername = (req, res) => {
  let studentUsername = req.body.username;
  let updateStudentByUsernamePromise = StudentModel.findOne({username: studentUsername}).exec();
  updateStudentByUsernamePromise
    .then(student => {
      _.extend(student, req.body);
      return student.save();
    })
    .then(student => {
      return res.status(201).json(student);
    })
    .catch(err => {
      return res.status(500).json({ error: err.message });
    });
};

// Delete students.
StudentController.deleteStudentById = (req, res) => {
  let studentID = req.body.id;
  let findByIdAndRemovePromise = StudentModel.findByIdAndRemove(
    studentID
  ).exec();

  findByIdAndRemovePromise
    .then(student => {
      return student
        ? res.status(201).json(student)
        : res
            .status(404)
            .json({ error: `No student found with id: ${studentID}` });
    })
    .catch(err => {
      console.log("Error: " + err.message);
      return res.status(500).json({ error: err.message });
    });
};

StudentController.deleteStudentByUsername = (req, res) => {
  let studentUsername = req.body.username;
  let findByUsernameAndRemovePromise = StudentModel.findOneAndRemove(
    {username: studentUsername}
  ).exec();

  findByUsernameAndRemovePromise
    .then(student => {
      return student
        ? res.status(201).json(student)
        : res
            .status(404)
            .json({ error: `No student found with username: ${studentUsername}` });
    })
    .catch(err => {
      console.log("Error: " + err.message);
      return res.status(500).json({ error: err.message });
    });
};

module.exports = StudentController;