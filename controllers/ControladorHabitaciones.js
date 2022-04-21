//El controlador tien la logica del negocio
export class ControladorHabitacion{
     
    constructor(){
        
    }
    insertar(request,response){
        //resivir los datos de la peticion
        let datosPeticion=request.body
        //°coneccion co BD °Ejecuto la consulta (INSERTE) °Envio la respuesta
        response.status(200).json({
            mensaje:"Exito en el ingreso de datos",
            datosIngresados:datosPeticion,
            estado:true
        })
    }

    logicaBuscar(request,response){
        let datosPrueba=[{nombre:"habitacion1",precio:3000000},{nombre:"habitacion2",precio:40000000}]
        response.status(200).json({
            mensaje:"Exito buscando la habitacion",
            datos:datosPrueba,
            estado:true
        })
    }

    buscarId(request,response){
        let id=request.params.id
        response.status(200).json({
            mensaje:"Exito buscando la habitacion por id",
            datos:"datos del id:" + id,
            estado:true
        })
    }

    Editar(request,response){
        let id=request.params.id //el id que llega por la URL
        let datosPeticion=request.bodys//Recibo datod de body
        response.status(200).json({
            mensaje:"Exito editando por id",
            datos:"datos del id:" + id,
            estado:true
        })
    }

    eliminar(request,response){
        let id=request.params.id
        response.status(200).json({
            mensaje:"Exito eliminando la habitacion por id",
            datos:"datos del id:" + id,
            estado:true
        })
    }
}