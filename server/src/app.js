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
    //this is the socket port
    http.listen(8082)

    app.listen(config.port)

    io.on('connection', function (socket) {
        console.log('USER CONNECTED')

        socket.on('chat message', function(msg){
            io.emit('chat message', msg)
          })

        socket.on('text change', function(delta){
            console.log(delta)
            socket.broadcast.emit('text change', delta)
        })  
    })

    console.log(`Server started on port ${config.port}`)

})
