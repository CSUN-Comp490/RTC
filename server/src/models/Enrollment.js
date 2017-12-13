const Promise = require('bluebird')
const uuidv4 = require('uuid/v4');

module.exports = (sequelize, DataTypes) => {

  const Enrollment = sequelize.define('Enrollment', {
    studentId : {
        type: DataTypes.STRING,
        references: {
            model: 'Student',
            key: 'studentId'
        }
    },
    classId: {
        type: DataTypes.STRING,
        references: {
          model: 'Class',  
          key: 'classId'
        }
      },    
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  })

  return Enrollment
}