const Promise = require('bluebird')
const uuidv4 = require('uuid/v4');

module.exports = (sequelize, DataTypes) => {

  const Class = sequelize.define('Class', {
    classId: DataTypes.STRING,
    course: DataTypes.STRING,
    section: DataTypes.STRING,
    school: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  })

  return Class
}