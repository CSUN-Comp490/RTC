const Promise = require('bluebird')
const uuidv4 = require('uuid/v4');

module.exports = (sequelize, DataTypes) => {

  const Student = sequelize.define('Student', {
    studentId: DataTypes.STRING,
    name: DataTypes.STRING,
    email: {
        type: DataTypes.STRING,
        unique: true
      },
    school: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  })

  return Student
}