const Promise = require('bluebird')
const uuidv4 = require('uuid/v4');

module.exports = (sequelize, DataTypes) => {
  const Session = sequelize.define('Session', {
    sessionId: {
      type: DataTypes.STRING,
      unique: true
    },
    classId: {
      type: DataTypes.STRING,
      references: {
        // This is a reference to another model
        model: 'Class',

        // This is the column name of the referenced model
        key: 'classId'
      }
    },
    text: {
      type: DataTypes.TEXT
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    // run before we create, update or save the object
    hooks: {
      // beforeCreate: ,
      // beforeUpdate: ,
      // beforeSave:
    }
  })

  // sequelize.sync()
  //   .then(() => Session.create({
  //     sessionId: uuidv4(),
  //     classId: 'test',
  //     text: ''
  //   }))

  return Session
}