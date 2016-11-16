// Buena practica
'use strict';

//Importamos express
var express = require('express'),
	// Importamos modelo
	// "./" porque esta en el mismo lugar
	Trayecto = require('./models').Trayecto, 
	//Importamos enrutador
	router = express.Router();

router.route('/buscar/')
	.post(function(req, res){
		if (typeof req.body.tco == 'undefined'){
			console.log("busqueda en villarrica");
			Trayecto.findOne({h_salida_vill : req.body.vill, fecha : req.body.fecha}, function(err, result) {
    			if(err){
    				res.send(500, err.message);
    			} else {
    				res.status(200).jsonp(result);
    			}
    		});
		} else {
			console.log("busqueda en temuco");
			Trayecto.findOne({h_salida_tco : req.body.tco, fecha : req.body.fecha}, function(err, result) {
	    		if(err){
	    			res.send(500, err.message);
	    		} else {
	    			res.status(200).jsonp(result);
	    		}
    		});
		}
	});


router.route('/modificar/')
	.post(function(req, res){
		if (typeof req.body.tco == 'undefined'){
			console.log("modificacion en villarrica");
			Trayecto.findOne({h_salida_vill : req.body.vill, fecha : req.body.fecha}, function(err, result) {
				if(result == null){
					res.send(500, {msj: "no encontado"});
				} else {
					if (typeof req.body.a01 !== 'undefined'){
    				result.a01 = req.body.a01;
	    			} 
	    			else if (typeof req.body.a02 !== 'undefined') {
	    				result.a02 = req.body.a02;
	    			} 
	    			else if (typeof req.body.a03 !== 'undefined') {
	    				result.a03 = req.body.a03;
	    			} 
	    			else if (typeof req.body.a04 !== 'undefined') {
	    				result.a04 = req.body.a04;
	    			} 
	    			else if (typeof req.body.a05 !== 'undefined') {
	    				result.a05 = req.body.a05;
	    			} 
	    			else if (typeof req.body.a06 !== 'undefined') {
	    				result.a06 = req.body.a06;
	    			} 
	    			else if (typeof req.body.a07 !== 'undefined') {
	    				result.a07 = req.body.a07;
	    			} 
	    			else if (typeof req.body.a08 !== 'undefined') {
	    				result.a08 = req.body.a08;
	    			} 
	    			else if (typeof req.body.a09 !== 'undefined') {
	    				result.a09 = req.body.a09;
	    			} 
	    			else if (typeof req.body.a10 !== 'undefined') {
	    				result.a10 = req.body.a10;
	    			} 
	    			else if (typeof req.body.a11 !== 'undefined') {
	    				result.a11 = req.body.a11;
	    			} 
	    			else if (typeof req.body.a12 !== 'undefined') {
	    				result.a12 = req.body.a12;
	    			} 
	    			else if (typeof req.body.a13 !== 'undefined') {
	    				result.a13 = req.body.a13;
	    			} 
	    			else if (typeof req.body.a14 !== 'undefined') {
	    				result.a14 = req.body.a14;
	    			} 
	    			else if (typeof req.body.a15 !== 'undefined') {
	    				result.a15 = req.body.a15;
	    			} 
	    			else if (typeof req.body.a16 !== 'undefined') {
	    				result.a16 = req.body.a16;
	    			} 
	    			else if (typeof req.body.a17 !== 'undefined') {
	    				result.a17 = req.body.a17;
	    			} 
	    			else if (typeof req.body.a18 !== 'undefined') {
	    				result.a18 = req.body.a19;
	    			} 
	    			else if (typeof req.body.a19 !== 'undefined') {
	    				result.a19 = req.body.a19;
	    			} 
	    			else if (typeof req.body.a20 !== 'undefined') {
	    				result.a20 = req.body.a20;
	    			} 
	    			else if (typeof req.body.a21 !== 'undefined') {
	    				result.a21 = req.body.a21;
	    			} 
	    			else if (typeof req.body.a22 !== 'undefined') {
	    				result.a22 = req.body.a22;
	    			} 
	    			else if (typeof req.body.a23 !== 'undefined') {
	    				result.a23 = req.body.a23;
	    			} 
	    			else if (typeof req.body.a24 !== 'undefined') {
	    				result.a24 = req.body.a24;
	    			} 
	    			else if (typeof req.body.a25 !== 'undefined') {
	    				result.a25 = req.body.a25;
	    			} 
	    			else if (typeof req.body.a26 !== 'undefined') {
	    				result.a26 = req.body.a26;
	    			} 
	    			else if (typeof req.body.a27 !== 'undefined') {
	    				result.a27 = req.body.a27;
	    			} 
	    			else if (typeof req.body.a28 !== 'undefined') {
	    				result.a28 = req.body.a28;
	    			} 
	    			else if (typeof req.body.a29 !== 'undefined') {
	    				result.a29 = req.body.a29;
	    			} 
	    			else if (typeof req.body.a30 !== 'undefined') {
	    				result.a30 = req.body.a30;
	    			} 
	    			else if (typeof req.body.a31 !== 'undefined') {
	    				result.a31 = req.body.a31;
	    			} 
	    			else if (typeof req.body.a32 !== 'undefined') {
	    				result.a32 = req.body.a32;
	    			} 
	    			else if (typeof req.body.a33 !== 'undefined') {
	    				result.a33 = req.body.a33;
	    			} 
	    			else if (typeof req.body.a34 !== 'undefined') {
	    				result.a34 = req.body.a34;
	    			} 
	    			else if (typeof req.body.a35 !== 'undefined') {
	    				result.a35 = req.body.a35;
	    			} 
	    			else if (typeof req.body.a36 !== 'undefined') {
	    				result.a36 = req.body.a36;
	    			} 
	    			else if (typeof req.body.a37 !== 'undefined') {
	    				result.a37 = req.body.a37;
	    			} 
	    			else if (typeof req.body.a38 !== 'undefined') {
	    				result.a38 = req.body.a38;
	    			} 
	    			else if (typeof req.body.a39 !== 'undefined') {
	    				result.a39 = req.body.a39;
	    			} 
	    			else if (typeof req.body.a40 !== 'undefined') {
	    				result.a40 = req.body.a40;
	    			} 
	    			else if (typeof req.body.a41 !== 'undefined') {
	    				result.a41 = req.body.a41;
	    			} 
	    			else if (typeof req.body.a42 !== 'undefined') {
	    				result.a42 = req.body.a42;
	    			} 
	    			else if (typeof req.body.a43 !== 'undefined') {
	    				result.a43 = req.body.a43;
	    			} 
	    			else if (typeof req.body.a44 !== 'undefined') {
	    				result.a44 = req.body.a44;
	    			} 
	    			else if (typeof req.body.p01 !== 'undefined') {
	    				result.p01 = req.body.p01;
	    			} 
	    			else if (typeof req.body.p02 !== 'undefined') {
	    				result.p02 = req.body.p02;
	    			} 
	    			else if (typeof req.body.p03 !== 'undefined') {
	    				result.p03 = req.body.p03;
	    			} 
	    			else if (typeof req.body.p04 !== 'undefined') {
	    				result.p04 = req.body.p04;
	    			} 
	    			else if (typeof req.body.p05 !== 'undefined') {
	    				result.p05 = req.body.p05;
	    			} 
	    			else if (typeof req.body.p06 !== 'undefined') {
	    				result.p06 = req.body.p06;
	    			} 
	    			else if (typeof req.body.p07 !== 'undefined') {
	    				result.p07 = req.body.p07;
	    			} 
	    			else if (typeof req.body.p08 !== 'undefined') {
	    				result.p08 = req.body.p08;
	    			} 
	    			else if (typeof req.body.p09 !== 'undefined') {
	    				result.p09 = req.body.p09;
	    			} 
	    			else if (typeof req.body.p10 !== 'undefined') {
	    				result.p10 = req.body.p10;
	    			} 
    				result.save(function(err) {
			            if(err){
			            	res.status(500).send(err.message);
			            } else{
			      			res.status(200).jsonp(result);
			            }
        			});
				}
	    	});
		} else {
			console.log("modificacion en temuco");
			Trayecto.findOne({h_salida_tco : req.body.tco, fecha : req.body.fecha}, function(err, result) {
				
    			if(result == null){
					res.send(500, {msj: "no encontado"});
				} else {
					if (typeof req.body.a01 !== 'undefined'){
    				result.a01 = req.body.a01;
	    			} 
	    			else if (typeof req.body.a02 !== 'undefined') {
	    				result.a02 = req.body.a02;
	    			} 
	    			else if (typeof req.body.a03 !== 'undefined') {
	    				result.a03 = req.body.a03;
	    			} 
	    			else if (typeof req.body.a04 !== 'undefined') {
	    				result.a04 = req.body.a04;
	    			} 
	    			else if (typeof req.body.a05 !== 'undefined') {
	    				result.a05 = req.body.a05;
	    			} 
	    			else if (typeof req.body.a06 !== 'undefined') {
	    				result.a06 = req.body.a06;
	    			} 
	    			else if (typeof req.body.a07 !== 'undefined') {
	    				result.a07 = req.body.a07;
	    			} 
	    			else if (typeof req.body.a08 !== 'undefined') {
	    				result.a08 = req.body.a08;
	    			} 
	    			else if (typeof req.body.a09 !== 'undefined') {
	    				result.a09 = req.body.a09;
	    			} 
	    			else if (typeof req.body.a10 !== 'undefined') {
	    				result.a10 = req.body.a10;
	    			} 
	    			else if (typeof req.body.a11 !== 'undefined') {
	    				result.a11 = req.body.a11;
	    			} 
	    			else if (typeof req.body.a12 !== 'undefined') {
	    				result.a12 = req.body.a12;
	    			} 
	    			else if (typeof req.body.a13 !== 'undefined') {
	    				result.a13 = req.body.a13;
	    			} 
	    			else if (typeof req.body.a14 !== 'undefined') {
	    				result.a14 = req.body.a14;
	    			} 
	    			else if (typeof req.body.a15 !== 'undefined') {
	    				result.a15 = req.body.a15;
	    			} 
	    			else if (typeof req.body.a16 !== 'undefined') {
	    				result.a16 = req.body.a16;
	    			} 
	    			else if (typeof req.body.a17 !== 'undefined') {
	    				result.a17 = req.body.a17;
	    			} 
	    			else if (typeof req.body.a18 !== 'undefined') {
	    				result.a18 = req.body.a19;
	    			} 
	    			else if (typeof req.body.a19 !== 'undefined') {
	    				result.a19 = req.body.a19;
	    			} 
	    			else if (typeof req.body.a20 !== 'undefined') {
	    				result.a20 = req.body.a20;
	    			} 
	    			else if (typeof req.body.a21 !== 'undefined') {
	    				result.a21 = req.body.a21;
	    			} 
	    			else if (typeof req.body.a22 !== 'undefined') {
	    				result.a22 = req.body.a22;
	    			} 
	    			else if (typeof req.body.a23 !== 'undefined') {
	    				result.a23 = req.body.a23;
	    			} 
	    			else if (typeof req.body.a24 !== 'undefined') {
	    				result.a24 = req.body.a24;
	    			} 
	    			else if (typeof req.body.a25 !== 'undefined') {
	    				result.a25 = req.body.a25;
	    			} 
	    			else if (typeof req.body.a26 !== 'undefined') {
	    				result.a26 = req.body.a26;
	    			} 
	    			else if (typeof req.body.a27 !== 'undefined') {
	    				result.a27 = req.body.a27;
	    			} 
	    			else if (typeof req.body.a28 !== 'undefined') {
	    				result.a28 = req.body.a28;
	    			} 
	    			else if (typeof req.body.a29 !== 'undefined') {
	    				result.a29 = req.body.a29;
	    			} 
	    			else if (typeof req.body.a30 !== 'undefined') {
	    				result.a30 = req.body.a30;
	    			} 
	    			else if (typeof req.body.a31 !== 'undefined') {
	    				result.a31 = req.body.a31;
	    			} 
	    			else if (typeof req.body.a32 !== 'undefined') {
	    				result.a32 = req.body.a32;
	    			} 
	    			else if (typeof req.body.a33 !== 'undefined') {
	    				result.a33 = req.body.a33;
	    			} 
	    			else if (typeof req.body.a34 !== 'undefined') {
	    				result.a34 = req.body.a34;
	    			} 
	    			else if (typeof req.body.a35 !== 'undefined') {
	    				result.a35 = req.body.a35;
	    			} 
	    			else if (typeof req.body.a36 !== 'undefined') {
	    				result.a36 = req.body.a36;
	    			} 
	    			else if (typeof req.body.a37 !== 'undefined') {
	    				result.a37 = req.body.a37;
	    			} 
	    			else if (typeof req.body.a38 !== 'undefined') {
	    				result.a38 = req.body.a38;
	    			} 
	    			else if (typeof req.body.a39 !== 'undefined') {
	    				result.a39 = req.body.a39;
	    			} 
	    			else if (typeof req.body.a40 !== 'undefined') {
	    				result.a40 = req.body.a40;
	    			} 
	    			else if (typeof req.body.a41 !== 'undefined') {
	    				result.a41 = req.body.a41;
	    			} 
	    			else if (typeof req.body.a42 !== 'undefined') {
	    				result.a42 = req.body.a42;
	    			} 
	    			else if (typeof req.body.a43 !== 'undefined') {
	    				result.a43 = req.body.a43;
	    			} 
	    			else if (typeof req.body.a44 !== 'undefined') {
	    				result.a44 = req.body.a44;
	    			} 
	    			else if (typeof req.body.p01 !== 'undefined') {
	    				result.p01 = req.body.p01;
	    			} 
	    			else if (typeof req.body.p02 !== 'undefined') {
	    				result.p02 = req.body.p02;
	    			} 
	    			else if (typeof req.body.p03 !== 'undefined') {
	    				result.p03 = req.body.p03;
	    			} 
	    			else if (typeof req.body.p04 !== 'undefined') {
	    				result.p04 = req.body.p04;
	    			} 
	    			else if (typeof req.body.p05 !== 'undefined') {
	    				result.p05 = req.body.p05;
	    			} 
	    			else if (typeof req.body.p06 !== 'undefined') {
	    				result.p06 = req.body.p06;
	    			} 
	    			else if (typeof req.body.p07 !== 'undefined') {
	    				result.p07 = req.body.p07;
	    			} 
	    			else if (typeof req.body.p08 !== 'undefined') {
	    				result.p08 = req.body.p08;
	    			} 
	    			else if (typeof req.body.p09 !== 'undefined') {
	    				result.p09 = req.body.p09;
	    			} 
	    			else if (typeof req.body.p10 !== 'undefined') {
	    				result.p10 = req.body.p10;
	    			} 
    				result.save(function(err) {
			            if(err){
			            	res.status(500).send(err.message);
			            } else{
			      			res.status(200).jsonp(result);
			            }
        			});
				}
    		});
		}
	});

router.route('/agregartrayecto/')
	.post(function(req, res){
		var trayecto = new Trayecto({
			h_salida_tco   : req.body.tco,
			h_salida_vill  : req.body.vill,
			fecha          : req.body.fecha
		});
		//Siempre debemos guardar
		// para que quede en la db
		trayecto.save(function(err, result){
			if (err){
				console.log(err);
				console.log("hay un error");
				res.status(500).send(err.message);
			} else {
				res.status(200)
            	.jsonp(result);
		    	console.log("se ha agregado");
			}
		});
	});

router.route('/obtenertrayecto')
	.get(function(req,res){
		Trayecto.find(function(err, result) {
		    if(err){
		    	res.send(500, err.message);
		    } else {
		     	res.status(200).jsonp(result);
		    }
    	});	
	})

module.exports = router;