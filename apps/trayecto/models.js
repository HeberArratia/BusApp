// Buena practica
'use strict';
var mongoose = require('../../config/mongoose'),
//Traemos schema usuarios
//Esto se hace porque podemos tener varios schemas
// por eso agregamos ".userSchema"
// Esto es como decir shemas.userShema;
	trayectoSchema = require('./schemas.js').trayectoSchema;

//Creamos el modelo y la exportamos
//Crear modelo que se va a llamar "user"
// Se asigna nombre de modelo y schema
//Los modelos sirven para ejecutar funciones sobre la db
//la db se crea sola
var models = {
	Trayecto : mongoose.model('trayecto', trayectoSchema)
};

module.exports = models;