const { Schema, model } = require('mongoose')

const userSchema = new Schema({
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    from: {type: String, required: true}
})

module.exports = model('User', userSchema)