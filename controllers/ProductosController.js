const Productos = require('./../model/Productos')

module.exports = {
    get : (params) => {
        return new Promise((resolve, reject) =>{
            Productos.find(params)
            .then( data => {
                resolve(data)
            }).catch( err => {
                reject( err)
            })
        })
    },
    getById : (id) => {
        return new Promise((resolve, reject) =>{
            Productos.findById(id)
            .then( data => {
                resolve(data)
            }).catch( err => {
                reject( err)
            })
        })
    },
    post : ( params) => {
        return new Promise((resolve, reject) =>{
            Productos.create(params)
            .then( data => {
                resolve(data)
            }).catch( err => {
                reject( err)
            })
        })
    },
    put : ( id, params) => {
        return new Promise((resolve, reject) =>{
            Productos.findByIdAndUpdate(id, params, {'new': true})
            .then( data => {
                resolve(data)
            }).catch( err => {
                reject( err)
            })
        })
    },
    deleteById : (id) => {
        return new Promise((resolve, reject) =>{
            Productos.findByIdAndDelete(id)
            .then( data => {
                resolve(data)
            }).catch( err => {
                reject( err)
            })
        })
    },
}