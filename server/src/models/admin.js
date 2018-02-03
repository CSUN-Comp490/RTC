const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
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

  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.Date
  
});

module.exports = mongoose.model("admin", AdminSchema);