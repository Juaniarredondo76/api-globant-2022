import express from 'express'

//separando rutas

export let rutas=express.Router() 

//defino las rutas 

// rutas para los ervicios de habitacion
//1° servicio agregar habiatacion
rutas.post('/juana/v1/habitaciones/', function (req, res) {
    res.send('Hola bebe estoy agregando habitaciones')
})

//2° servicios para buscra todas las habitaciones 
rutas.get('/juana/v1/-todas-las-habitaciones/', function (req, res) {
    res.send('Hola corazon estoy buscando todas las habitaciones')
})
//
  
  

//rutas para los servicios de reservas