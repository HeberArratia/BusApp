// Buena practica
'use strict';

var mongoose = require('../../config/mongoose'),
//Objeto que nos va a permitir crear schemas
	Schema = mongoose.Schema;

//Vamos a crear nuestro schema
// esto es como crear una tabla en mysql

var schemas = {
	trayectoSchema : new Schema({
		h_salida_tco: 	{
		                    type: String, 
		                    required: [true, 'La hora de salida es obligatoria']
		                    /*minlength: [3, 'La hora es demasiado corta'],
		                    maxlength: [5, 'La hora es demasiado larga']*/
	                	},
	    h_salida_vill:  {
		                    type: String, 
		                    required: [true, 'La hora de salida es obligatoria']
		                    /*minlength: [3, 'La hora es demasiado corta'],
		                     maxlength: [5, 'La hora es demasiado larga']*/
	                	},
	    fecha:          {
		                    type: String, 
		                    required: [true, 'La fecha es obligatoria']
	                	},
	    /* Los siguientes atributos corresponden al asiento y poseen su estado actual,
	    (1) disponible (2) vendido (3) ocupado.*/
	    a01:            {
	    					type: Number,
	    					//De manera predeterminada se encuentran disponibles
	    					default: 1,
	    					enum: {
		                          values : [1,2,3],
		                          message: 'Ingrese un estado válido'
	                        }
	    				},
	    a02:            {
	    					type: Number,
	    					//De manera predeterminada se encuentran disponibles
	    					default: 1,
	    					enum: {
		                          values : [1,2,3],
		                          message: 'Ingrese un estado válido'
	                        }
	    				},
	    a03:            {
	    					type: Number,
	    					//De manera predeterminada se encuentran disponibles
	    					default: 1,
	    					enum: {
		                          values : [1,2,3],
		                          message: 'Ingrese un estado válido'
	                        }
	    				},
	    a04:            {
	    					type: Number,
	    					//De manera predeterminada se encuentran disponibles
	    					default: 1,
	    					enum: {
		                          values : [1,2,3],
		                          message: 'Ingrese un estado válido'
	                        }
	    				},
	    a05:            {
	    					type: Number,
	    					//De manera predeterminada se encuentran disponibles
	    					default: 1,
	    					enum: {
		                          values : [1,2,3],
		                          message: 'Ingrese un estado válido'
	                        }
	    				},
	    a06:            {
	    					type: Number,
	    					//De manera predeterminada se encuentran disponibles
	    					default: 1,
	    					enum: {
		                          values : [1,2,3],
		                          message: 'Ingrese un estado válido'
	                        }
	    				},
	    a07:            {
	    					type: Number,
	    					//De manera predeterminada se encuentran disponibles
	    					default: 1,
	    					enum: {
		                          values : [1,2,3],
		                          message: 'Ingrese un estado válido'
	                        }
	    				},
	    a08:            {
	    					type: Number,
	    					//De manera predeterminada se encuentran disponibles
	    					default: 1,
	    					enum: {
		                          values : [1,2,3],
		                          message: 'Ingrese un estado válido'
	                        }
	    				},
	    a09:            {
	    					type: Number,
	    					//De manera predeterminada se encuentran disponibles
	    					default: 1,
	    					enum: {
		                          values : [1,2,3],
		                          message: 'Ingrese un estado válido'
	                        }
	    				},
	    a10:            {
	    					type: Number,
	    					//De manera predeterminada se encuentran disponibles
	    					default: 1,
	    					enum: {
		                          values : [1,2,3],
		                          message: 'Ingrese un estado válido'
	                        }
	    				},
	    a11:            {
	    					type: Number,
	    					//De manera predeterminada se encuentran disponibles
	    					default: 1,
	    					enum: {
		                          values : [1,2,3],
		                          message: 'Ingrese un estado válido'
	                        }
	    				},
	    a12:            {
	    					type: Number,
	    					//De manera predeterminada se encuentran disponibles
	    					default: 1,
	    					enum: {
		                          values : [1,2,3],
		                          message: 'Ingrese un estado válido'
	                        }
	    				},
	    a13:            {
	    					type: Number,
	    					//De manera predeterminada se encuentran disponibles
	    					default: 1,
	    					enum: {
		                          values : [1,2,3],
		                          message: 'Ingrese un estado válido'
	                        }
	    				},
	    a14:            {
	    					type: Number,
	    					//De manera predeterminada se encuentran disponibles
	    					default: 1,
	    					enum: {
		                          values : [1,2,3],
		                          message: 'Ingrese un estado válido'
	                        }
	    				},
	    a15:            {
	    					type: Number,
	    					//De manera predeterminada se encuentran disponibles
	    					default: 1,
	    					enum: {
		                          values : [1,2,3],
		                          message: 'Ingrese un estado válido'
	                        }
	    				},
	    a16:            {
	    					type: Number,
	    					//De manera predeterminada se encuentran disponibles
	    					default: 1,
	    					enum: {
		                          values : [1,2,3],
		                          message: 'Ingrese un estado válido'
	                        }
	    				},
	    a17:            {
	    					type: Number,
	    					//De manera predeterminada se encuentran disponibles
	    					default: 1,
	    					enum: {
		                          values : [1,2,3],
		                          message: 'Ingrese un estado válido'
	                        }
	    				},
	    a18:            {
	    					type: Number,
	    					//De manera predeterminada se encuentran disponibles
	    					default: 1,
	    					enum: {
		                          values : [1,2,3],
		                          message: 'Ingrese un estado válido'
	                        }
	    				},
	    a19:            {
	    					type: Number,
	    					//De manera predeterminada se encuentran disponibles
	    					default: 1,
	    					enum: {
		                          values : [1,2,3],
		                          message: 'Ingrese un estado válido'
	                        }
	    				},
	    a20:            {
	    					type: Number,
	    					//De manera predeterminada se encuentran disponibles
	    					default: 1,
	    					enum: {
		                          values : [1,2,3],
		                          message: 'Ingrese un estado válido'
	                        }
	    				},
	    a21:            {
	    					type: Number,
	    					//De manera predeterminada se encuentran disponibles
	    					default: 1,
	    					enum: {
		                          values : [1,2,3],
		                          message: 'Ingrese un estado válido'
	                        }
	    				},
	    a22:            {
	    					type: Number,
	    					//De manera predeterminada se encuentran disponibles
	    					default: 1,
	    					enum: {
		                          values : [1,2,3],
		                          message: 'Ingrese un estado válido'
	                        }
	    				},
	    a23:            {
	    					type: Number,
	    					//De manera predeterminada se encuentran disponibles
	    					default: 1,
	    					enum: {
		                          values : [1,2,3],
		                          message: 'Ingrese un estado válido'
	                        }
	    				},
	    a24:            {
	    					type: Number,
	    					//De manera predeterminada se encuentran disponibles
	    					default: 1,
	    					enum: {
		                          values : [1,2,3],
		                          message: 'Ingrese un estado válido'
	                        }
	    				},
	    a25:            {
	    					type: Number,
	    					//De manera predeterminada se encuentran disponibles
	    					default: 1,
	    					enum: {
		                          values : [1,2,3],
		                          message: 'Ingrese un estado válido'
	                        }
	    				},
	    a26:            {
	    					type: Number,
	    					//De manera predeterminada se encuentran disponibles
	    					default: 1,
	    					enum: {
		                          values : [1,2,3],
		                          message: 'Ingrese un estado válido'
	                        }
	    				},
	    a27:            {
	    					type: Number,
	    					//De manera predeterminada se encuentran disponibles
	    					default: 1,
	    					enum: {
		                          values : [1,2,3],
		                          message: 'Ingrese un estado válido'
	                        }
	    				},
	    a28:            {
	    					type: Number,
	    					//De manera predeterminada se encuentran disponibles
	    					default: 1,
	    					enum: {
		                          values : [1,2,3],
		                          message: 'Ingrese un estado válido'
	                        }
	    				},
	    a29:            {
	    					type: Number,
	    					//De manera predeterminada se encuentran disponibles
	    					default: 1,
	    					enum: {
		                          values : [1,2,3],
		                          message: 'Ingrese un estado válido'
	                        }
	    				},
	    a30:            {
	    					type: Number,
	    					//De manera predeterminada se encuentran disponibles
	    					default: 1,
	    					enum: {
		                          values : [1,2,3],
		                          message: 'Ingrese un estado válido'
	                        }
	    				},
	    a31:            {
	    					type: Number,
	    					//De manera predeterminada se encuentran disponibles
	    					default: 1,
	    					enum: {
		                          values : [1,2,3],
		                          message: 'Ingrese un estado válido'
	                        }
	    				},
	    a32:            {
	    					type: Number,
	    					//De manera predeterminada se encuentran disponibles
	    					default: 1,
	    					enum: {
		                          values : [1,2,3],
		                          message: 'Ingrese un estado válido'
	                        }
	    				},
	    a33:            {
	    					type: Number,
	    					//De manera predeterminada se encuentran disponibles
	    					default: 1,
	    					enum: {
		                          values : [1,2,3],
		                          message: 'Ingrese un estado válido'
	                        }
	    				},
	    a34:            {
	    					type: Number,
	    					//De manera predeterminada se encuentran disponibles
	    					default: 1,
	    					enum: {
		                          values : [1,2,3],
		                          message: 'Ingrese un estado válido'
	                        }
	    				},
	    a35:            {
	    					type: Number,
	    					//De manera predeterminada se encuentran disponibles
	    					default: 1,
	    					enum: {
		                          values : [1,2,3],
		                          message: 'Ingrese un estado válido'
	                        }
	    				},
	    a36:            {
	    					type: Number,
	    					//De manera predeterminada se encuentran disponibles
	    					default: 1,
	    					enum: {
		                          values : [1,2,3],
		                          message: 'Ingrese un estado válido'
	                        }
	    				},
	    a37:            {
	    					type: Number,
	    					//De manera predeterminada se encuentran disponibles
	    					default: 1,
	    					enum: {
		                          values : [1,2,3],
		                          message: 'Ingrese un estado válido'
	                        }
	    				},
	    a38:            {
	    					type: Number,
	    					//De manera predeterminada se encuentran disponibles
	    					default: 1,
	    					enum: {
		                          values : [1,2,3],
		                          message: 'Ingrese un estado válido'
	                        }
	    				},
	    a39:            {
	    					type: Number,
	    					//De manera predeterminada se encuentran disponibles
	    					default: 1,
	    					enum: {
		                          values : [1,2,3],
		                          message: 'Ingrese un estado válido'
	                        }
	    				},
	    a40:            {
	    					type: Number,
	    					//De manera predeterminada se encuentran disponibles
	    					default: 1,
	    					enum: {
		                          values : [1,2,3],
		                          message: 'Ingrese un estado válido'
	                        }
	    				},
	    a41:            {
	    					type: Number,
	    					//De manera predeterminada se encuentran disponibles
	    					default: 1,
	    					enum: {
		                          values : [1,2,3],
		                          message: 'Ingrese un estado válido'
	                        }
	    				},
	    a42:            {
	    					type: Number,
	    					//De manera predeterminada se encuentran disponibles
	    					default: 1,
	    					enum: {
		                          values : [1,2,3],
		                          message: 'Ingrese un estado válido'
	                        }
	    				},
	    a43:            {
	    					type: Number,
	    					//De manera predeterminada se encuentran disponibles
	    					default: 1,
	    					enum: {
		                          values : [1,2,3],
		                          message: 'Ingrese un estado válido'
	                        }
	    				},
	    a44:            {
	    					type: Number,
	    					//De manera predeterminada se encuentran disponibles
	    					default: 1,
	    					enum: {
		                          values : [1,2,3],
		                          message: 'Ingrese un estado válido'
	                        }
	    				},
	    //tendremos 44 asientos...
	    /* Los siguientes atributos representan al pasajero de pie y poseen su estado actual,
	    (1) disponible (2) vendido y se asume ocupado.*/
		p01:            {
							type: Number,
							//De manera predeterminada se encuentran disponibles
							default: 1,
							enum: {
				                  values : [1,3],
				                  message: 'Ingrese un estado válido'
				            }
						},
		p02:            {
	    					type: Number,
	    					//De manera predeterminada se encuentran disponibles
	    					default: 1,
	    					enum: {
		                          values : [1,3],
		                          message: 'Ingrese un estado válido'
	                        }
	    				},
		p03:            {
							type: Number,
							//De manera predeterminada se encuentran disponibles
							default: 1,
							enum: {
			                      values : [1,3],
			                      message: 'Ingrese un estado válido'
			                }
						},
		p04:            {
							type: Number,
							//De manera predeterminada se encuentran disponibles
							default: 1,
							enum: {
			                      values : [1,3],
			                      message: 'Ingrese un estado válido'
			                }
						},
		p05:            {
							type: Number,
							//De manera predeterminada se encuentran disponibles
							default: 1,
							enum: {
			                      values : [1,3],
			                      message: 'Ingrese un estado válido'
			                }
						},
	    p06:            {
	    					type: Number,
	    					//De manera predeterminada se encuentran disponibles
	    					default: 1,
	    					enum: {
		                          values : [1,3],
		                          message: 'Ingrese un estado válido'
	                        }
	    				},
		p07:            {
							type: Number,
							//De manera predeterminada se encuentran disponibles
							default: 1,
							enum: {
			                      values : [1,3],
			                      message: 'Ingrese un estado válido'
			                }
						},
		p08:            {
							type: Number,
							//De manera predeterminada se encuentran disponibles
							default: 1,
							enum: {
			                      values : [1,3],
			                      message: 'Ingrese un estado válido'
			                }
						},
		p09:            {
							type: Number,
							//De manera predeterminada se encuentran disponibles
							default: 1,
							enum: {
			                      values : [1,3],
			                      message: 'Ingrese un estado válido'
			                }
						},
		p10:            {
							type: Number,
							//De manera predeterminada se encuentran disponibles
							default: 1,
							enum: {
			                      values : [1,3],
			                      message: 'Ingrese un estado válido'
			                }
						}
	   	//tendremos 10 puestos disponibles de pie
	})
};

//La variable schemas la vamos a importar

module.exports  = schemas;