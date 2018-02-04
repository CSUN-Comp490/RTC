const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const SessionSchema = new Schema({
  SessionName: {
    type: String,
    required: true,
    default: "Untitled"
  },
  courseID: {
    type: Schema.Types.ObjectId,
    ref: "class",
    required: true
  },

  transcripts: {
    type: Object
  },

  captionist: [
    {
      type: Schema.Types.ObjectId,
      ref: "captionist",
      required: true
    }
  ],

  edited: {
    type: Boolean,
    required: true,
    default: false
  },

  timestamps: true,

});

module.exports = mongoose.model("transcript", TranscriptSchema);