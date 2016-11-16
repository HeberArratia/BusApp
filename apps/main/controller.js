// Buena practica
'use strict';

//Importamos express
var express = require('express'),
	//Importamos enrutador
	router = express.Router(),
	// permite saber si hay usuario logeado
	isLoggedIn = require('../user/middlewares').isLoggedIn;

router.route('/dashboard')
	.get(isLoggedIn, function(req,res){
		//Observemos que gracias a la implementación
		// del passport podemos obtener el usuario
		// que se ha logeado
		console.log(req.user);

		if (req.user.cargo == 1){
			res.render('app/dash-operador');
		} else if (req.user.cargo == 2) {
			res.render('app/dash-aux');
		}
		/*
		res.send("hola world desde controlador")
		ya no vamos a utilizar esto, si no "render"*/
		//Renderizamos el template home
		
	});


//Esto nos permite utilizar el archivo controller.js en 'otro' lugar
//El router lo usamos en otro lugar
module.exports = router;