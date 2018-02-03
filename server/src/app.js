const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const http = require("http");
const app = express();
const server = http.Server(app);
const io = require("socket.io")(server);//not used yet 
const socketIO = require("./controllers/socket");
const dbInfo = require("./config/config.js");
mongoose.Promise = global.Promise;

//Import routes
const AdminRoutes = require("./routes/admins");
const CaptionistRoutes = require("./routes/captionists");
const ClassRoutes = require("./routes/classes");
const SessionRoutes = require("./routes/sessions");
const StudentRoutes = require("./routes/students");

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

//Setup routes
app.use("/api/admins", AdminRoutes(io));
app.use("/api/captionists", CaptionistRoutes(io));
app.use("/api/classes", ClassRoutes(io));
app.use("/api/students", StudentRoutes(io));
app.use("/api/sessions", SessionRoutes(io));

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