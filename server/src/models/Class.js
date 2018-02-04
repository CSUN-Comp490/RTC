const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const ClassSchema = new Schema({
  courseID: {
    required: true,
    type: String,
    index: {
      unique: true
    }
  },

  school: {
    type: String
  },

  courseName: {
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
    type: Date,
    required: true
  },

  sessions: [
    {
      type: Schema.Types.ObjectId,
      ref: "session"
    }
  ],

  timestamps: { 
    createdAt: 'created_at', 
    updatedAt: 'updated_at' 
  }
  
});

module.exports = mongoose.model("class", ClassSchema);