/**
 * Register middleware for user authentication. Checks for valid email and password with Joi library
 */

const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      // Email must be a string and password must satisfy regular expression
      firstName: Joi.string(),
      lastName: Joi.string(),
      school: Joi.string(),
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      )
    }

    const {error} = Joi.validate(req.body, schema)
    if (error) {
      switch (error.details[0].context.key) {
        case 'firstName':
        case 'lastName':
          res.status(400).send({
            error: 'First and Last Name cannot contain numbers or special characters'
          })
          break
        case 'school':
          res.status(400).send({
            error: 'School can not contain numbers or special characters'
          })
          break
          // If email invalid
        case 'email':
          res.status(400).send({
            error: 'You must send a valid email address'
          })
          break
          // If password invalid
        case 'password':
          res.status(400).send({
            error: `The password provided failed to match the following rules:
                            <br>
                            1. It must contain ONLY the following characters: lower case, upper case, numerics
                            <br>
                            2. It must be at least 8 characters in length and not greater than 32 characters in length                      `
          })
          break
        default:
        // Other errors
          res.send(400).send({
            error: 'Invalid registration information'
          })
      }
    } else {
    // Goto AuthenticationController.js (in controllers directory *server)
      next()
    }
  },
  login () {
    
  }
}
