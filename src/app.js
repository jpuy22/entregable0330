import express from 'express'
import handlebars from 'express-handlebars'
import { Server, Socket } from 'socket.io'

import __dirname from './utils.js'
import viewsrouter from './routes/views.router.js'
import realtimeproducts from './routes/realtimeproducts.router.js'


const app = express()

/*
//Inicializamos motor de plantilla
app.engine('handlebars', handlebars.engine())
//Indicamos donde estan las vistas
app.set('views', __dirname + '/views')
//Indicamos que motor de plantillas usar
app.set('view engine', 'handlebars')


app.use('/', viewsrouter)
app.use('/realtimeproducts', realtimeproducts)
*/

/*
    ***********************
*/

//const server = app.listen(8080)
const httpServer = app.listen(8080, () => console.log('listen...'))
const socketServer = new Server(httpServer)

app.use(express.static(__dirname + '/public'))

socketServer.on('connection', socket => {
    //HandShake
    console.log('Nuevo Cliente')
})


