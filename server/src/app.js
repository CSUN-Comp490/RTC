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

sequelize.sync().then(() => {
  // socket port
  http.listen(8082)
  app.listen(config.port)

  io.on('connection', function (socket) {
    console.log('User Connected')
    socket.on('room', function (room) {
      console.log(room)
      socket.join(room)
    })
  })
  console.log(`Server started on port ${config.port}`)
})
