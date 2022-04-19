//importo el paquete express 
//forma vieja de importar
//const express = require('express')
//forma nueva para importar
import express from 'express'
//importar las rutas del Api
import {rutas} from'../routes/rutas.js'

export class Servidor {

    constructor(){
        //atributo que se llama app donde almaceno la propiedad de express
        this.app = express()
        this.atenderServicios()


    }

    encenderServidor(){

        //configurar la variable de entorno 
        //1 solo servicio
        this.app.listen(process.env.PORT,function(){
            console.log(`Servidor encendido en ${process.env.PORT}`)
        })
    }

    atenderServicios(){

        //imstalo el servicio
        /*
        //ya esta en rutas 
        this.app.get('/', function (req, res) {
            res.send('Hola bebe')
          })
          */
         this.app.use('/',rutas)
          

    }

    conectarconBd(){


    }


}