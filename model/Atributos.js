const mongoose = require('mongoose')

const Atrubutos = new mongoose.Schema({ 
    "name" : {type: String, default : ''}, 
    "empresa": {type: String, default : ''},
    "atributos": {type: String, default : ''},
})

module.exports = mongoose.model('Atrubutos',Atrubutos)

