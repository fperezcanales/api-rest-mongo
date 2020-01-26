const mongoose = require('mongoose')

const Productos = new mongoose.Schema({ 
    "name" : {type: String, default : ''}, 
    "category": {type: String, default : ''},
    "price": {type: Number, default : 0},
    "store": {type: String, default : ''},
    "attributes": {type: String, default : ''},
})

module.exports = mongoose.model('Productos',Productos)

