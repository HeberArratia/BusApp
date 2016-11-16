// Buena practica
'use strict';

var mongoose = require('../../config/mongoose'),
//Objeto que nos va a permitir crear schemas
	Schema = mongoose.Schema;

//Vamos a crear nuestro schema
// esto es como crear una tabla en mysql

var schemas = {
	userSchema : new Schema({
		username : {
			type : String, 
			required: [true, 'el rut es obligatorio']
		},
		password : {
			type : String,
			required: [true, 'la contrasena es obligatoria']
		},
		/*El siguiente atributo representa el cargo del usuario
		(1) operador (2) auxiliar */
		cargo   :  {
            type: Number, 
            required: [true, 'la cargo es obligatorio'],
            enum: {
                  values : [1,2],
                  message: 'Ingrese un cargo válido'
            }
	    },
	    /* El siguiente atributo representa el terminal donde opera un operador */
	    // (0) ningun termianl (1) tco (2) villarrica
	    terminal:   {
            type: Number, 
            required: [true, 'la contrasena es obligatoria'],
            enum: {
                  values : [0,1,2],
                  message: 'Ingrese un terminal válido'
            }
    	}
	})
};

//La variable schemas la vamos a importar

module.exports  = schemas;