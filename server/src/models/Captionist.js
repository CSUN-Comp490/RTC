const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const CaptionistSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
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