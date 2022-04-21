import express from 'express'
//importo el controlador habitacion
import { ControladorHabitacion } from '../controllers/ControladorHabitaciones.js'
import { ControladorReserva } from '../controllers/ControladorReservas.js'
//separando rutas

export let rutas=express.Router() 

//creo un objeto de la clase controladorHabitacion 
let controladorHabitacion=new ControladorHabitacion()
let controladorReserva=new ControladorReserva()


//defino las rutas 

// rutas para los ervicios de habitacion
//1° servicio agregar habiatacion
rutas.post('/juana/v1/habitaciones/',controladorHabitacion.insertar)

//2° servicios para buscra todas las habitaciones 
rutas.get('/juana/v1/habitaciones/',controladorHabitacion.logicaBuscar)

//3°servidor para buscar por id
rutas.get('/juana/v1/habitaciones/:id/',controladorHabitacion.buscarId) 

//4°servidor cambiando las habitaciones 
rutas.put('/juana/v1/habitaciones/:id/',controladorHabitacion.Editar)

//5°servidor eliminar habitaciones
rutas.delete('/juana/v1/habitaciones/:id/', controladorHabitacion.eliminar)


//rutas para los servicios de reservas
//1° servidor esta ingresando reservas
rutas.post('/juana/v1/ingresar-reserva/',controladorReserva.insertarReserva )

//2°servidor esta buscando reserbas por id
rutas.get('/juana/v1/reserva/:id/', controladorReserva.BuscarReserva)

//3° servidor editar reservas 
rutas.put('/juana/v1/reserva/:id/', controladorReserva.EditarReserva)

//4° servidor eliminando reservas 
rutas.delete('/juana/v1/reserva/:id/', controladorReserva.eliminarReserva)


