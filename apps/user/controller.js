// Buena practica
'use strict';

//Importamos express
var express = require('express'),
	// Importamos modelo
	// "./" porque esta en el mismo lugar
	User = require('./models').User,
	//Importamos enrutador
	router = express.Router();
	
// para finalizar sesión

router.route('/salir/')
	.get(function(req, res){
		// este metodo nos da passport
		// sirve para cerrar sesion
		req.logout();
		res.redirect('/');
	});

//Definimos las rutas EDITAR!!!
router.route('/')
	.get(function(req,res){
		//Necesitamos mostrar el mensaje de error
		// el cual viene con ayuda de connect flash
		// para eso creamos un contexto que va a enviar
		// los datos
		var context = {
			error_message : req.flash('error')[0]
		}
		if(req.user){
			res.redirect('/dashboard/');
		} else {
			res.render('app/index', context);
		}
	});

router.route('/agregar/')
	.post(function(req,res){
			console.log("******");
			console.log(req.body.username);
			console.log(req.body.cargo);
			console.log(req.body.password);
			console.log(req.body.terminal);
			console.log("******");
		//Llenamos la db con los datos
		// que vienen pos POST
		// RECORDAR hachear la clave
		// o "ocultar" con bcrypt-nodejs
		var user = new User({
			username : req.body.username,
			password : req.body.password,
			cargo    : req.body.cargo,
			terminal : req.body.terminal
		});
		//Siempre debemos guardar
		// para que quede en la db
		user.save(function(err, result){
			if (err){
				console.log(err);
				console.log("hay un error");
				res.status(500).send(err.message);
			} else {
				res.status(200)
            	.jsonp(result);
		    	console.log("se ha agregado");
			}
			//lo redirijimos a la url donde se pueda ingresar
			// en redirect no es necesario poner carpetas
			// es decir nombres de carpeta como arriba en "render"
			//res.redirect('/');
		});
	});

router.route('/obtener')
	// Mostrar todos los videos
	.get(function(req,res){
		User.find(function(err, result) {
		    if(err){
		    	res.send(500, err.message);
		    } else {
		     	res.status(200).jsonp(result);
		    }
    	});	
	})

/* Esto es solo un ejemplo de otra ruta
router.route('/otraurl/')
	.get(function(req,res){
		res.send("esto es la otra URL desde controlador")
	});
*/

//Esto nos permite utilizar el archivo controller.js en 'otro' lugar
//El router lo usamos en otro lugar
module.exports = router;