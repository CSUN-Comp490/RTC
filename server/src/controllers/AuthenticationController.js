const {User} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

//Signs a user with jwt to return a jwt token
function jwtSignUser (user){
    const ONE_WEEK = 60 * 60 * 24 * 7
    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn: ONE_WEEK
    })
}

module.exports = {
    async register(req, res) {
        try {
            //Creates a user
            const user = await User.create(req.body)
            const userJson = user.toJSON()
            res.send({
                user: userJson,
                token: jwtSignUser(userJson)
            })
        }catch(err){
            res.status(400).send({
                error: 'This email account is already in use.'
            })
        }
    },

    //Grabs username and password from body
    async login(req, res) {
        try {
            //Takes input from login form
            const {email, password} = req.body
            //Returns a user object
            //Checks db for a user with that email
            const user = await User.findOne({
                where: {
                    email: email
                }
            })
            //If user was not defined
            if(!user){
                return res.status(403).send({
                    error: 'The login information was incorrect'
                })
            }

            //Verifies that the password matches the password to the user model
            const isPasswordValid = await user.comparePassword(password)
            if(!isPasswordValid){
                return res.status(403).send({
                    error: 'The login information was incorrect'
                })
            }

            const userJson = user.toJSON()
            res.send({
                user: userJson,
                token: jwtSignUser(userJson)
            })

        }catch(err){
            res.status(500).send({
                error: 'An error has occurred trying to log in'
            })
        }
    }
}