import { modeloReserva } from '../models/reservaModelo'
class ServicioReserva{
    constructor(){}

    async buscarReservarID(id){
        let reserva=await modeloReserva.findById(id)
        return reserva
    }
    async registrarReserva(reserva){
        //dato der tipo modelo 
        let reservaNueva=new modeloReserva(reserva)
        return await reservaNueva.save()
    }
    async editarReserva(id,reserva){
        return await modeloReserva.findById(id,reserva)
    }
    async eliminarReserva(id){
        return await modeloReserva.findByIdAndDelete(id)
    }
}