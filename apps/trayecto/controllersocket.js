// Buena practica
'use strict';

//Importamos express
var express = require('express'),
	// Importamos modelo
	// "./" porque esta en el mismo lugar
	Trayecto = require('./models').Trayecto;

module.exports = function(io){	

	io.on('connection', function(socket) {
		
		//Buscar trayecto
		socket.on('buscar', function(dataBuscar) {
    		if (typeof dataBuscar.tco == 'undefined'){
				console.log("busqueda en villarrica");
				Trayecto.findOne({h_salida_vill : dataBuscar.vill, fecha : dataBuscar.fecha}, function(err, result) {
	    			if(err){
	    				console.log("error en busqueda en villarrica");
	    			} else {
	    				socket.emit('respuestaBuscar', result);
	    			}
	    		});
			} else {
				console.log("busqueda en temuco");
				Trayecto.findOne({h_salida_tco : dataBuscar.tco, fecha : dataBuscar.fecha}, function(err, result) {
		    		if(err){
		    			console.log("error en busqueda en temuco");
		    		} else {
		    			socket.emit('respuestaBuscar', result);
		    		}
	    		});
			}
    		 
 		 });

		socket.on('modificar', function(dataModificar) {
			console.log(dataModificar);
			if (typeof dataModificar.tco == 'undefined'){
				console.log("modificacion en villarrica");
				Trayecto.findOne({h_salida_vill : dataModificar.vill, fecha : dataModificar.fecha}, function(err, result) {
					if(err){
						console.log("error en modificación de villarrica");
					} else {
						if (typeof dataModificar.a01 !== 'undefined'){
	    				result.a01 = dataModificar.a01;
		    			} 
		    			else if (typeof dataModificar.a02 !== 'undefined') {
		    				result.a02 = dataModificar.a02;
		    			} 
		    			else if (typeof dataModificar.a03 !== 'undefined') {
		    				result.a03 = dataModificar.a03;
		    			} 
		    			else if (typeof dataModificar.a04 !== 'undefined') {
		    				result.a04 = dataModificar.a04;
		    			} 
		    			else if (typeof dataModificar.a05 !== 'undefined') {
		    				result.a05 = dataModificar.a05;
		    			} 
		    			else if (typeof dataModificar.a06 !== 'undefined') {
		    				result.a06 = dataModificar.a06;
		    			} 
		    			else if (typeof dataModificar.a07 !== 'undefined') {
		    				result.a07 = dataModificar.a07;
		    			} 
		    			else if (typeof dataModificar.a08 !== 'undefined') {
		    				result.a08 = dataModificar.a08;
		    			} 
		    			else if (typeof dataModificar.a09 !== 'undefined') {
		    				result.a09 = dataModificar.a09;
		    			} 
		    			else if (typeof dataModificar.a10 !== 'undefined') {
		    				result.a10 = dataModificar.a10;
		    			} 
		    			else if (typeof dataModificar.a11 !== 'undefined') {
		    				result.a11 = dataModificar.a11;
		    			} 
		    			else if (typeof dataModificar.a12 !== 'undefined') {
		    				result.a12 = dataModificar.a12;
		    			} 
		    			else if (typeof dataModificar.a13 !== 'undefined') {
		    				result.a13 = dataModificar.a13;
		    			} 
		    			else if (typeof dataModificar.a14 !== 'undefined') {
		    				result.a14 = dataModificar.a14;
		    			} 
		    			else if (typeof dataModificar.a15 !== 'undefined') {
		    				result.a15 = dataModificar.a15;
		    			} 
		    			else if (typeof dataModificar.a16 !== 'undefined') {
		    				result.a16 = dataModificar.a16;
		    			} 
		    			else if (typeof dataModificar.a17 !== 'undefined') {
		    				result.a17 = dataModificar.a17;
		    			} 
		    			else if (typeof dataModificar.a18 !== 'undefined') {
		    				result.a18 = dataModificar.a19;
		    			} 
		    			else if (typeof dataModificar.a19 !== 'undefined') {
		    				result.a19 = dataModificar.a19;
		    			} 
		    			else if (typeof dataModificar.a20 !== 'undefined') {
		    				result.a20 = dataModificar.a20;
		    			} 
		    			else if (typeof dataModificar.a21 !== 'undefined') {
		    				result.a21 = dataModificar.a21;
		    			} 
		    			else if (typeof dataModificar.a22 !== 'undefined') {
		    				result.a22 = dataModificar.a22;
		    			} 
		    			else if (typeof dataModificar.a23 !== 'undefined') {
		    				result.a23 = dataModificar.a23;
		    			} 
		    			else if (typeof dataModificar.a24 !== 'undefined') {
		    				result.a24 = dataModificar.a24;
		    			} 
		    			else if (typeof dataModificar.a25 !== 'undefined') {
		    				result.a25 = dataModificar.a25;
		    			} 
		    			else if (typeof dataModificar.a26 !== 'undefined') {
		    				result.a26 = dataModificar.a26;
		    			} 
		    			else if (typeof dataModificar.a27 !== 'undefined') {
		    				result.a27 = dataModificar.a27;
		    			} 
		    			else if (typeof dataModificar.a28 !== 'undefined') {
		    				result.a28 = dataModificar.a28;
		    			} 
		    			else if (typeof dataModificar.a29 !== 'undefined') {
		    				result.a29 = dataModificar.a29;
		    			} 
		    			else if (typeof dataModificar.a30 !== 'undefined') {
		    				result.a30 = dataModificar.a30;
		    			} 
		    			else if (typeof dataModificar.a31 !== 'undefined') {
		    				result.a31 = dataModificar.a31;
		    			} 
		    			else if (typeof dataModificar.a32 !== 'undefined') {
		    				result.a32 = dataModificar.a32;
		    			} 
		    			else if (typeof dataModificar.a33 !== 'undefined') {
		    				result.a33 = dataModificar.a33;
		    			} 
		    			else if (typeof dataModificar.a34 !== 'undefined') {
		    				result.a34 = dataModificar.a34;
		    			} 
		    			else if (typeof dataModificar.a35 !== 'undefined') {
		    				result.a35 = dataModificar.a35;
		    			} 
		    			else if (typeof dataModificar.a36 !== 'undefined') {
		    				result.a36 = dataModificar.a36;
		    			} 
		    			else if (typeof dataModificar.a37 !== 'undefined') {
		    				result.a37 = dataModificar.a37;
		    			} 
		    			else if (typeof dataModificar.a38 !== 'undefined') {
		    				result.a38 = dataModificar.a38;
		    			} 
		    			else if (typeof dataModificar.a39 !== 'undefined') {
		    				result.a39 = dataModificar.a39;
		    			} 
		    			else if (typeof dataModificar.a40 !== 'undefined') {
		    				result.a40 = dataModificar.a40;
		    			} 
		    			else if (typeof dataModificar.a41 !== 'undefined') {
		    				result.a41 = dataModificar.a41;
		    			} 
		    			else if (typeof dataModificar.a42 !== 'undefined') {
		    				result.a42 = dataModificar.a42;
		    			} 
		    			else if (typeof dataModificar.a43 !== 'undefined') {
		    				result.a43 = dataModificar.a43;
		    			} 
		    			else if (typeof dataModificar.a44 !== 'undefined') {
		    				result.a44 = dataModificar.a44;
		    			} 
		    			else if (typeof dataModificar.p01 !== 'undefined') {
		    				result.p01 = dataModificar.p01;
		    			} 
		    			else if (typeof dataModificar.p02 !== 'undefined') {
		    				result.p02 = dataModificar.p02;
		    			} 
		    			else if (typeof dataModificar.p03 !== 'undefined') {
		    				result.p03 = dataModificar.p03;
		    			} 
		    			else if (typeof dataModificar.p04 !== 'undefined') {
		    				result.p04 = dataModificar.p04;
		    			} 
		    			else if (typeof dataModificar.p05 !== 'undefined') {
		    				result.p05 = dataModificar.p05;
		    			} 
		    			else if (typeof dataModificar.p06 !== 'undefined') {
		    				result.p06 = dataModificar.p06;
		    			} 
		    			else if (typeof dataModificar.p07 !== 'undefined') {
		    				result.p07 = dataModificar.p07;
		    			} 
		    			else if (typeof dataModificar.p08 !== 'undefined') {
		    				result.p08 = dataModificar.p08;
		    			} 
		    			else if (typeof dataModificar.p09 !== 'undefined') {
		    				result.p09 = dataModificar.p09;
		    			} 
		    			else if (typeof dataModificar.p10 !== 'undefined') {
		    				result.p10 = dataModificar.p10;
		    			} 
	    				result.save(function(err) {
				            if(err){
				            	console.log("error en guardar la modificacion");
				            } else{
				      			console.log("bien");
				      			io.sockets.emit('respuestaModificar', result);
				            }
	        			});
					}
		    	});
			} else {
				console.log("modificacion en temuco");
				Trayecto.findOne({h_salida_tco : dataModificar.tco, fecha : dataModificar.fecha}, function(err, result) {
	    			if(err){
						console.log("error en modificación de temuco");
					} else {
						if (typeof dataModificar.a01 !== 'undefined'){
	    				result.a01 = dataModificar.a01;
		    			} 
		    			else if (typeof dataModificar.a02 !== 'undefined') {
		    				result.a02 = dataModificar.a02;
		    			} 
		    			else if (typeof dataModificar.a03 !== 'undefined') {
		    				result.a03 = dataModificar.a03;
		    			} 
		    			else if (typeof dataModificar.a04 !== 'undefined') {
		    				result.a04 = dataModificar.a04;
		    			} 
		    			else if (typeof dataModificar.a05 !== 'undefined') {
		    				result.a05 = dataModificar.a05;
		    			} 
		    			else if (typeof dataModificar.a06 !== 'undefined') {
		    				result.a06 = dataModificar.a06;
		    			} 
		    			else if (typeof dataModificar.a07 !== 'undefined') {
		    				result.a07 = dataModificar.a07;
		    			} 
		    			else if (typeof dataModificar.a08 !== 'undefined') {
		    				result.a08 = dataModificar.a08;
		    			} 
		    			else if (typeof dataModificar.a09 !== 'undefined') {
		    				result.a09 = dataModificar.a09;
		    			} 
		    			else if (typeof dataModificar.a10 !== 'undefined') {
		    				result.a10 = dataModificar.a10;
		    			} 
		    			else if (typeof dataModificar.a11 !== 'undefined') {
		    				result.a11 = dataModificar.a11;
		    			} 
		    			else if (typeof dataModificar.a12 !== 'undefined') {
		    				result.a12 = dataModificar.a12;
		    			} 
		    			else if (typeof dataModificar.a13 !== 'undefined') {
		    				result.a13 = dataModificar.a13;
		    			} 
		    			else if (typeof dataModificar.a14 !== 'undefined') {
		    				result.a14 = dataModificar.a14;
		    			} 
		    			else if (typeof dataModificar.a15 !== 'undefined') {
		    				result.a15 = dataModificar.a15;
		    			} 
		    			else if (typeof dataModificar.a16 !== 'undefined') {
		    				result.a16 = dataModificar.a16;
		    			} 
		    			else if (typeof dataModificar.a17 !== 'undefined') {
		    				result.a17 = dataModificar.a17;
		    			} 
		    			else if (typeof dataModificar.a18 !== 'undefined') {
		    				result.a18 = dataModificar.a19;
		    			} 
		    			else if (typeof dataModificar.a19 !== 'undefined') {
		    				result.a19 = dataModificar.a19;
		    			} 
		    			else if (typeof dataModificar.a20 !== 'undefined') {
		    				result.a20 = dataModificar.a20;
		    			} 
		    			else if (typeof dataModificar.a21 !== 'undefined') {
		    				result.a21 = dataModificar.a21;
		    			} 
		    			else if (typeof dataModificar.a22 !== 'undefined') {
		    				result.a22 = dataModificar.a22;
		    			} 
		    			else if (typeof dataModificar.a23 !== 'undefined') {
		    				result.a23 = dataModificar.a23;
		    			} 
		    			else if (typeof dataModificar.a24 !== 'undefined') {
		    				result.a24 = dataModificar.a24;
		    			} 
		    			else if (typeof dataModificar.a25 !== 'undefined') {
		    				result.a25 = dataModificar.a25;
		    			} 
		    			else if (typeof dataModificar.a26 !== 'undefined') {
		    				result.a26 = dataModificar.a26;
		    			} 
		    			else if (typeof dataModificar.a27 !== 'undefined') {
		    				result.a27 = dataModificar.a27;
		    			} 
		    			else if (typeof dataModificar.a28 !== 'undefined') {
		    				result.a28 = dataModificar.a28;
		    			} 
		    			else if (typeof dataModificar.a29 !== 'undefined') {
		    				result.a29 = dataModificar.a29;
		    			} 
		    			else if (typeof dataModificar.a30 !== 'undefined') {
		    				result.a30 = dataModificar.a30;
		    			} 
		    			else if (typeof dataModificar.a31 !== 'undefined') {
		    				result.a31 = dataModificar.a31;
		    			} 
		    			else if (typeof dataModificar.a32 !== 'undefined') {
		    				result.a32 = dataModificar.a32;
		    			} 
		    			else if (typeof dataModificar.a33 !== 'undefined') {
		    				result.a33 = dataModificar.a33;
		    			} 
		    			else if (typeof dataModificar.a34 !== 'undefined') {
		    				result.a34 = dataModificar.a34;
		    			} 
		    			else if (typeof dataModificar.a35 !== 'undefined') {
		    				result.a35 = dataModificar.a35;
		    			} 
		    			else if (typeof dataModificar.a36 !== 'undefined') {
		    				result.a36 = dataModificar.a36;
		    			} 
		    			else if (typeof dataModificar.a37 !== 'undefined') {
		    				result.a37 = dataModificar.a37;
		    			} 
		    			else if (typeof dataModificar.a38 !== 'undefined') {
		    				result.a38 = dataModificar.a38;
		    			} 
		    			else if (typeof dataModificar.a39 !== 'undefined') {
		    				result.a39 = dataModificar.a39;
		    			} 
		    			else if (typeof dataModificar.a40 !== 'undefined') {
		    				result.a40 = dataModificar.a40;
		    			} 
		    			else if (typeof dataModificar.a41 !== 'undefined') {
		    				result.a41 = dataModificar.a41;
		    			} 
		    			else if (typeof dataModificar.a42 !== 'undefined') {
		    				result.a42 = dataModificar.a42;
		    			} 
		    			else if (typeof dataModificar.a43 !== 'undefined') {
		    				result.a43 = dataModificar.a43;
		    			} 
		    			else if (typeof dataModificar.a44 !== 'undefined') {
		    				result.a44 = dataModificar.a44;
		    			} 
		    			else if (typeof dataModificar.p01 !== 'undefined') {
		    				result.p01 = dataModificar.p01;
		    			} 
		    			else if (typeof dataModificar.p02 !== 'undefined') {
		    				result.p02 = dataModificar.p02;
		    			} 
		    			else if (typeof dataModificar.p03 !== 'undefined') {
		    				result.p03 = dataModificar.p03;
		    			} 
		    			else if (typeof dataModificar.p04 !== 'undefined') {
		    				result.p04 = dataModificar.p04;
		    			} 
		    			else if (typeof dataModificar.p05 !== 'undefined') {
		    				result.p05 = dataModificar.p05;
		    			} 
		    			else if (typeof dataModificar.p06 !== 'undefined') {
		    				result.p06 = dataModificar.p06;
		    			} 
		    			else if (typeof dataModificar.p07 !== 'undefined') {
		    				result.p07 = dataModificar.p07;
		    			} 
		    			else if (typeof dataModificar.p08 !== 'undefined') {
		    				result.p08 = dataModificar.p08;
		    			} 
		    			else if (typeof dataModificar.p09 !== 'undefined') {
		    				result.p09 = dataModificar.p09;
		    			} 
		    			else if (typeof dataModificar.p10 !== 'undefined') {
		    				result.p10 = dataModificar.p10;
		    			} 
	    				result.save(function(err) {
				            if(err){
				            	console.log("error en guardar la modificacion");
				            } else{
				      			console.log("bien");
				      			io.sockets.emit('respuestaModificar', result);
				            }
	        			});
					}
	    		});
			}
		});

	});
};