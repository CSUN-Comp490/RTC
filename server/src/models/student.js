const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
<<<<<<< HEAD

=======
>>>>>>> bee3e3ef5ba77f6448dc572c66012bd00585e8ae
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
    required: true,
    unique: true
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
