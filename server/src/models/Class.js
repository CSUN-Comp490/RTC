const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const ClassSchema = new Schema({
  classID: {
    required: true,
    type: String,
    index: {
      unique: true
    }
  },

  school: {
    type: String
  },

  className: {
    type: String,
    required: true
  },

  professor: {
    type: String,
    required: true,
    default: "staff"
  },

  days: {
    type: String,
    required: true
  },
  
  time: {
    type: String,
    required: true
  },

  semester: {
    type: String //ex Spring 2018
  },

  sessions: [
    {
      type: Schema.Types.ObjectId,
      ref: "session"
    }
  ],

});

module.exports = mongoose.model("class", ClassSchema);