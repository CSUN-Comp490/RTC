const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const io = require('socket.io')
const path = require('path')

module.exports = (app) => {
    app.post('/register', AuthenticationControllerPolicy.register, AuthenticationController.register)

    app.post('/login', AuthenticationController.login)

    app.get('/', function (req, res) {
        res.sendFile(__dirname + '/index.html')
    })
}
