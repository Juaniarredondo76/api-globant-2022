//importar mongoose 
//permite ingresar a la base de datos y crear modelos de datos 
import mongoose from 'mongoose'

//creando constante para crear el modelo de datos
const Schema=mongoose.Schema

//construllo mi modelo o esquema no relacionales son objetos habitacion
const Habitacion=new Schema({
    nombre:{
        type:String,
        required:true
    },
    foto:{
        type:String,
        required:true
    },
    descripcion:{
        type:String,
        required:true
    },
    precio:{
        type:Number,
        required:true
    }
})

export const modeloHabitacion =mongoose.model('habitaciones',Habitacion)
