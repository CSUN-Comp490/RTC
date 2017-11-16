const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const path = require('path')

module.exports = (app) => {
    app.post('/register', AuthenticationControllerPolicy.register, AuthenticationController.register)

    app.post('/login', AuthenticationController.login)

    //move index to client at some point
    app.get('/session', function (req, res) {
        res.sendFile(__dirname + '/index.html')
    })
}
