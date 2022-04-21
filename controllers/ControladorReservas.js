//El controlador tien la logica del negocio
export class ControladorReserva{
     
    constructor(){
        
    }
    insertarReserva(request,response){
        let datosPeticion=request.body
        response.status(200).json({
            mensaje:"Exito en el ingreso de datos",
            datosIngresados:datosPeticion,
            estado:true
        })
    }

   BuscarReserva(request,response){
        let datosPrueba=[{nombre:"Reserva1",precio:3000000},{nombre:"Reserva2",precio:40000000}]
        response.status(200).json({
            mensaje:"Exito buscando la Reserva",
            datos:datosPrueba,
            estado:true
        })
    }

    buscarReservaId(request,response){
        let id=request.params.id
        response.status(200).json({
            mensaje:"Exito buscando la Reserva por id",
            datos:"datos del id:" + id,
            estado:true
        })
    }

    EditarReserva(request,response){
        let id=request.params.id
        let datosPeticion=request.bodys
        response.status(200).json({
            mensaje:"Exito editando por id",
            datos:"datos del id:" + id,
            estado:true
        })
    }

    eliminarReserva(request,response){
        let id=request.params.id
        response.status(200).json({
            mensaje:"Exito eliminando la Reserva por id",
            datos:"datos del id:" + id,
            estado:true
        })
    }
}