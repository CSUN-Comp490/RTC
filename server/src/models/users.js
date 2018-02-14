/*
    Note: Rigourously test this script. 
    -Ben

    Creates a user schema that utilizes 1 collection instead of 3 separate collections.
    Saves space and can easily determine role of user

    Sources used: https://anthonychu.ca/post/cosmos-db-mongoose-discriminators/
                  https://stackoverflow.com/questions/14588032/mongoose-password-hashing
                  https://www.mongodb.com/blog/post/passworhttps://anthonychu.ca/post/cosmos-db-mongoose-discriminators/d-authentication-with-mongoose-part-1

*/
const Promise = require('bluebird')
const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.Promise = global.Promise
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

const options = {
  //How the DB collection differentiates users
  discriminatorKey: 'role',
  //Name of the collection
  collection: 'users'
}

//Parent Schema: All schemas that inherit this must contain this data
const userSchema = mongoose.Schema({
    username: {
      type: String,
      required: true,
      index: {
        unique: true
      }
    },
    email: {
      type: String,
      required: true,
      index: {
          unique: true
      }
    },
    password: {
      type: String,
      required: true,
      select: false
    },
    name: {
      type: String,
      required: true
    }
}, options)

userSchema.pre('save', function(next) {

  const SALT_WORK_FACTOR = 10
  var user = this

  //only hash the password if it has been modified
  if (!user.isModified('password')) { return next() }

  //generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) { return next(err) }
    //hash the password using the next salt
    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next (err)
        //override the cleartext password with the hashed one
        user.password = hash
        next()
    })
  })
})

userSchema.methods.comparePassword = function (candidatePassword) {
  return bcrypt.compareAsync(password, this.password)
}

//Student Schema: Inherits userSchema
const studentSchema = userSchema.discriminator('student', new mongoose.Schema({
  classes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'class'
    }
  ]
}))

//Captionist Schema: Inherits userSchema
const captionistSchema = userSchema.discriminator('captionist', new mongoose.Schema({
  classes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'class'
    }
  ],
  sessions: [
    {
      type: Schema.Types.ObjectId,
      ref: 'session'
    }
  ]
}))

//Admin Schema: Inherits userSchema
const adminSchema = userSchema.discriminator('admin', new mongoose.Schema({
  
}))

module.exports = users
