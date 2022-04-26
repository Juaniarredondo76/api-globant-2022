//importacion de express
import express from 'express'
//importo el controlador habitacion
import { ControladorHabitacion } from '../controllers/ControladorHabitaciones.js'
import { ControladorReserva } from '../controllers/ControladorReservas.js'
//exportaciones
export let rutas=express.Router() 

//creo un objeto de la clase controladorHabitacion 
let controladorHabitacion=new ControladorHabitacion()
let controladorReserva=new ControladorReserva()

//defino las rutas 
rutas.post('/juana/v1/habitaciones/',controladorHabitacion.insertar)
rutas.get('/juana/v1/habitaciones/',controladorHabitacion.logicaBuscar)
rutas.get('/juana/v1/habitaciones/:id/',controladorHabitacion.buscarId) 
rutas.put('/juana/v1/habitaciones/:id/',controladorHabitacion.Editar)
rutas.delete('/juana/v1/habitaciones/:id/', controladorHabitacion.eliminar)

//rutas para los servicios de reservas
rutas.post('/juana/v1/ingresar-reserva/',controladorReserva.insertarReserva )
rutas.get('/juana/v1/reserva/:id/', controladorReserva.BuscarReserva)
rutas.put('/juana/v1/reserva/:id/', controladorReserva.EditarReserva)
rutas.delete('/juana/v1/reserva/:id/', controladorReserva.eliminarReserva)


