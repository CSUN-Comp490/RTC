<<<<<<< HEAD
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config = require('./config/config')

const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

sequelize.sync({force: false}).then(() => {
  // this is the socket port
  http.listen(8080)

  app.listen(config.port)

  io.on('connection', function (socket) {
    console.log('USER CONNECTED')

    socket.on('text change', function (delta) {
      console.log(delta)
      socket.broadcast.emit('text change', delta)
    })
  })

  console.log(`Server started on port ${config.port}`)

})
=======
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
  "mongodb://" + config.user + ":" + config.pw + "@ds221258.mlab.com:21258/retica",
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

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});

app.set("port", port);

io.on("connection", socket => socketIO(socket));

// Start Server
server.listen(port, () => {
  console.log("Server started on port: " + port);
});

module.exports = app;
>>>>>>> acc94e51b9b9f610072e79ac99b89109428f4dc9
