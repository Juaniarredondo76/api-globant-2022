import mongoose from 'mongoose'

export async function conectar(){
    try{

        await mongoose.connect(process.env.DATABASE);
        console.log("Exito conectandonos a BD")

    }catch(error){
        console.log("Error en la conexion de BD" + error)

    }
}