const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  password: {
    type: String,
    required: true
  },

  name: {
    type: String,
    required: false
  },

  email: {
    type: String,
    required: true
  },

  role: {
    type: String,
    default: 'student'
  },

  classes: [
    {
      type: Schema.Types.ObjectId,
      ref: "class"
    }
  ]
});

module.exports = mongoose.model("student", StudentSchema);
