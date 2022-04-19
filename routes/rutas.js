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
//3°servidor para buscar por id
rutas.get('/juana/v1/habitaciones-por-id/', function (req, res) {
    res.send('Hola cielo estoy buscando las habitaciones por id')
})
//4°servidor cambiando las habitaciones 
rutas.put('/juana/v1/cambiar-habitaciones/', function (req, res) {
    res.send('Hola amor estoy cambiando las habitaciones')
})
//5°servidor eliminar habitaciones
rutas.delete('/juana/v1/eliminar-habitaciones/', function (req, res) {
    res.send('Hola cariño estoy eliminando las habitaciones ')
})
//rutas para los servicios de reservas
//1° servidor esta ingresando reservas
rutas.post('/juana/v1/ingresar-reserva/', function (req, res) {
    res.send('Hola guap@ estoy ingresando las reservas')
})
//2°servidor esta buscando reserbas por id
rutas.get('/juana/v1/buscar-reserva-por-id/', function (req, res) {
    res.send('Hola cosita estoy buscando las reservas por id')
})
//3° servidor editar reservas 
rutas.put('/juana/v1/editar-reserva/', function (req, res) {
    res.send('Hola cochurumin@ estoy editando las reservas')
})
//4° servidor eliminando reservas 
rutas.delete('/juana/v1/eliminando-reserva/', function (req, res) {
    res.send('Hola tesoro estoy eliminando las reservas')
})


