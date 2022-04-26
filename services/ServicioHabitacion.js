//importo el modelo habitacion
import{modeloHabitacion} from '../models/habitacionModelo.js'

class ServicioHabitacion{
    constructor(){}
    async buscarTodos(){ 
       let habitaciones=await modeloHabitacion.find()
       return habitaciones
    }
    async buscarPorID(id){
        let habitacion=await modeloHabitacion.findById(id)
        return habitacion
    }
    async registrar(habitacion){
        //dato der tipo modelo 
        let habitacionNueva=new modeloHabitacion(habitacion)
        return await habitacionNueva.save()
    }
    async editar(id,habitacion){
        return await modeloHabitacion.findById(id,habitacion)
    }
    async eliminar(id){
        return await modeloHabitacion.findByIdAndDelete(id)
    }
}