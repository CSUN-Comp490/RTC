const Promise = require('bluebird')
const uuidv4 = require('uuid/v4');

module.exports = (sequelize, DataTypes) => {

    const Assignment = sequelize.define('Assignment', {
        sessionId: {
            type: DataTypes.STRING,
            references: {
                model: 'Session',
                key: 'sessionId'
            }
        },
        captionistId: {
            type: DataTypes.STRING,
            references: {
                model: 'Captionist',
                key: 'captionistId'
            }
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    })

    return Assignment
}