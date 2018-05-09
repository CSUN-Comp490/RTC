const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const CaptionistSchema = new Schema({
<<<<<<< HEAD
  
=======
>>>>>>> bee3e3ef5ba77f6448dc572c66012bd00585e8ae
  name: {
    type: String,
    required: false
  },

  email: {
    type: String,
    required: true,
    unique: true
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
