const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const CaptionistSchema = new Schema({
  name: {
    type: String,
    required: false
  },

  email: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  role: {
    type: String,
    default: 'captionist',
  },

  sessions: [
    {
      type: Schema.Types.ObjectId,
      ref: "session"
    }
  ],

  classes: [
    {
      type: Schema.Types.ObjectId,
      ref: "class"
    }
  ]

});

module.exports = mongoose.model("captionist", CaptionistSchema);
