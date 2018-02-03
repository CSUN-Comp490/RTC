const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const http = require("http");
const app = express();
const server = http.Server(app);
const io = require("socket.io")(server);//not used yet 
const dbInfo = require("./config/config.js");
mongoose.Promise = global.Promise;

//import routes here later


// Connect to our mongoDB instance
mongoose.connect(
  "mongodb://dbInfo.username:dbInfo.pw@ds221258.mlab.com:21258/retica",
  { useMongoClient: true },
  err => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected");
    }
  }
);

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 8080;

// CORS Middleware
app.use(cors());

//set up routes here later

// Index Route
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

app.set("port", port);

// Start Server
server.listen(port, () => {
  console.log("Server started on port: " + port);
});

module.exports = app;