const express = require('express')
const conectarDB = require('./config/db')
const config = require('./config/global')
const cors = require('cors')
const router = require('./routes/usuario')

const app = express()

conectarDB()

app.use(cors())
app.use(express.json())
app.use('/api', router)

app.use(express.static(__dirname + '/public'))



//hacer que cuando se vaya al puerto 5000 se muestre el register.html que esta dentro de /public pero tmbien cargar el css dentro de la carpeta styles
app.get('/', (req, res) => {
    res.send('API de usuarios')
})

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/login.html')
})

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/public/home.html')
}
)

app.listen(config.port, () => {
    console.log('El servidor corriendo por el puerto 5000')
})