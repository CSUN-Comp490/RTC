const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const http = require("http");
const app = express();
const server = http.Server(app);
const io = require("socket.io")(server);
const socketIO = require("./controllers/socket");
const config = require("./config/config.js");
mongoose.Promise = global.Promise;

//Import routes
const AdminRoutes = require("./routes/admins");
const CaptionistRoutes = require("./routes/captionists");
const ClassRoutes = require("./routes/classes");
const SessionRoutes = require("./routes/sessions");
const StudentRoutes = require("./routes/students");

// Connect to our mongoDB instance
mongoose.connect(
  "mongodb://" + config.user + ":" + config.pw + config.db,
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
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 8080;

var whitelist = ['http://localhost:8081']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

// CORS Middleware
app.use(cors(corsOptions));

//Setup routes
app.use("/api/admins", AdminRoutes(io));
app.use("/api/captionists", CaptionistRoutes(io));
app.use("/api/classes", ClassRoutes(io));
app.use("/api/students", StudentRoutes(io));
app.use("/api/sessions", SessionRoutes(io));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});

app.set("port", port);

io.on('connection', (socket) => {
  socket.on('join', (room) => {
    console.log('user has connected to room#' + room)
    socket.room = room
    console.log(room)
    socket.join(room)
  })

  socket.on('sendchat', (data) => {
    io.sockets.to(socket.room).emit('updatechat', data)
    console.log('Sending to room #' + socket.room + ': ' + data)
  })

  socket.on('disconnect', () => {
    console.log('user has disconnected from ' + socket.room)
  })
})

// Start Server
server.listen(port, () => {
  console.log("Server started on port: " + port);
});

module.exports = app;
