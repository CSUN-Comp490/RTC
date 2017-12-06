const Promise = require('bluebird')
const uuidv4 = require('uuid/v4');

module.exports = (sequelize, DataTypes) => {

    const Captionist = sequelize.define('Captionist', {
        captionistId: DataTypes.STRING,
        name: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    })

    return Captionist
}