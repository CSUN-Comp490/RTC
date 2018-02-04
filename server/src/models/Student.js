const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  username: {
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
  },

  email: {
    type: String,
    required: true
  },

  classes: [
    {
      type: Schema.Types.ObjectId,
      ref: "class"
    }
  ],

  timestamps: true,

});

module.exports = mongoose.model("student", StudentSchema);