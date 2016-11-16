var socket = io.connect('http://localhost:3000', {'forceNew': true});

alertify.set('notifier','position', 'bottom-left');
bloqued(true, 'Ingrese un trayecto');
var lugar;
var seleccionado;
//Buscar trayecto
$('#btn-buscar').click(function(e){
	limpiarSelect();
	var cargo = $('#info-cargo').text().indexOf("Operador");
	var terminal = $('#info-terminal').text().indexOf("Temuco");
	var dataBuscar;
	if (cargo == -1 || terminal  !== -1){
		dataBuscar = {
    		fecha: $('#in-fecha').val(),
    		tco: $('#in-hora option:selected').text()
  		};
  		lugar = 1;
	} else {
		dataBuscar = {
    		fecha: $('#in-fecha').val(),
    		vill: $('#in-hora option:selected').text()
  		};
  		lugar = 2;
	}
	socket.emit('buscar', dataBuscar);
});


//Cargar datos del trayecto buscado
socket.on('respuestaBuscar', function(data) {  
	if (data == null){
		bloqued(true, 'No se han encontrado resultados');
	} else {
		renderBus(data,function(){
			bloqued(false, null);
			limpiarSelect();
		});
	}  
});

//cargar datos al modificar trayecto
socket.on('respuestaModificar', function(data) { 
	var muestraHora = $('#muestra-hora').text().split(' ')[1];
	var muestraFecha = $('#muestra-fecha').text().split(' ')[1];
	if (data.h_salida_tco == muestraHora || data.h_salida_vill == muestraHora){
		if (muestraFecha == data.fecha){
			renderBus(data,function(){
				//bloqued(false, null);
				limpiarSelect();
			});
		}
	}
});

// select element
$('.number-a').click(function(){
	limpiarSelect();
	seleccionado = $(this).attr('id');
	$(this).find('.back').css({'display' : 'block'});
	$(this).find('span').css({'display' : 'block'});
	$(this).css({'border' : '3px solid #FFCE56', 'margin' : '1px'});
});

//Realizar accion
$('.btns').click(function(){
	var accion = $(this).text();
	var muestraHora = $('#muestra-hora').text().split(' ')[1];
	var muestraFecha = $('#muestra-fecha').text().split(' ')[1];

	modificar(accion, seleccionado, muestraHora, muestraFecha);
});

//Modificar elemento
function modificar(accion, elemento, hora, moment){
	if (typeof seleccionado !== 'undefined'){
		var nuevoDato;
		var dataModificar = [];
		var json = {};
		var elementoDom = $('#' + elemento);
		if (accion == 'Habilitar'){
			//Si ya esta verde, no se puede
			if (elementoDom.css('background-color') == 'rgb(116, 165, 127)'){
				alertify.error('Error: ya se encuentra habilitado');
				return false;
			}
			nuevoDato = 1;
		} else if (accion == 'Vender'){
			//Si no esta en verde no se puede vender
			if (elementoDom.css('background-color') !== 'rgb(116, 165, 127)'){
				alertify.error('Error: se encuentra vendido u ocupado');
				return false;
			}
	      	nuevoDato = 2;
		} else if (accion == 'Ocupar'){
			//Si No esta rojo se puede ocupar
			if (elementoDom.css('background-color') !== 'rgb(191, 66, 53)'){
				alertify.error('Error: solo se puede ocupar un asiento vendido');
				return false;
			}
			// si es pasillo no se puede ocupar
			if (elementoDom.hasClass('hpie')){
				alertify.error('No se puede ocupar un pasillo');
				return false;
			}
			nuevoDato = 3;
		}

	    json['' + elemento] = nuevoDato;
	    json['fecha'] = moment;
	   
		if (lugar == 1){
			json['tco'] = hora;
		} else {
			json['vill'] = hora;
	    }
		
		dataModificar.push(json);
		
		alertify.success('Realizado!');
		socket.emit('modificar', dataModificar[0]);
	} else{
		alertify.error('No hay nada seleccionado');
		console.log("no hay nada seleccionado");
	}
}

//limpiar elementos seleccionados
function limpiarSelect(){
	var select = $('.number-a');
	select.find('.back').css({'display' : 'none'});	
    select.find('span').css({'display' : 'none'});
	select.css({'border' : 'none', 'margin' : '4px'});
	seleccionado = undefined;
}


//Render del bus
function renderBus(data, siguiente){
	$('#muestra-fecha').text('Fecha: ' + data.fecha);
	if (lugar == 1){
		$('#muestra-hora').text('Hora: ' + data.h_salida_tco);
	} else {
		$('#muestra-hora').text('Hora: ' + data.h_salida_vill);
	}
	pintar(data.a01, 'a01');
	pintar(data.a02, 'a02');
	pintar(data.a03, 'a03');
	pintar(data.a04, 'a04');
	pintar(data.a05, 'a05');
	pintar(data.a06, 'a06');
	pintar(data.a07, 'a07');
	pintar(data.a08, 'a08');
	pintar(data.a09, 'a09');
	pintar(data.a10, 'a10');
	pintar(data.a11, 'a11');
	pintar(data.a12, 'a12');
	pintar(data.a13, 'a13');
	pintar(data.a14, 'a14');
	pintar(data.a15, 'a15');
	pintar(data.a16, 'a16');
	pintar(data.a17, 'a17');
	pintar(data.a18, 'a18');
	pintar(data.a19, 'a19');
	pintar(data.a20, 'a20');
	pintar(data.a21, 'a21');
	pintar(data.a22, 'a22');
	pintar(data.a23, 'a23');
	pintar(data.a24, 'a24');
	pintar(data.a25, 'a25');
	pintar(data.a26, 'a26');
	pintar(data.a27, 'a27');
	pintar(data.a28, 'a28');
	pintar(data.a29, 'a29');
	pintar(data.a30, 'a30');
	pintar(data.a31, 'a31');
	pintar(data.a32, 'a32');
	pintar(data.a33, 'a33');
	pintar(data.a34, 'a34');
	pintar(data.a35, 'a35');
	pintar(data.a36, 'a36');
	pintar(data.a37, 'a37');
	pintar(data.a38, 'a38');
	pintar(data.a39, 'a39');
	pintar(data.a40, 'a40');
	pintar(data.a41, 'a41');
	pintar(data.a42, 'a42');
	pintar(data.a43, 'a43');
	pintar(data.a44, 'a44');
	pintar(data.p01, 'p01');
	pintar(data.p02, 'p02');
	pintar(data.p03, 'p03');
	pintar(data.p04, 'p04');
	pintar(data.p05, 'p05');
	pintar(data.p06, 'p06');
	pintar(data.p07, 'p07');
	pintar(data.p08, 'p08');
	pintar(data.p09, 'p09');
	pintar(data.p10, 'p10');
	//callback
	siguiente();
}

function pintar(dato, element){
	var ele = $('#' + element + '');
	if (dato == 2){
		ele.css('cssText', 'background : #BF4235 !important');
	} else if (dato == 3){
		ele.css('cssText', 'background : #1C355E !important');
	} else {
		ele.css('cssText', 'background : #74A57F !important');
	}
}

//Control de bloqueo de la vista
function bloqued(acction, msg){
	if (acction){
		$('.bloqued').block({ 
			message:  '<h4>' + msg + '</h4>',
			css: { 
	            border: 'none', 
	            padding: '15px', 
	            backgroundColor: '#008EB2', 
	            '-webkit-border-radius': '10px', 
	            '-moz-border-radius': '10px', 
	            opacity: .7, 
	            color: '#fff',
	            cursor         : 'auto'
        	},
            overlayCSS: { 
            	backgroundColor: '#fff',
            	cursor         : 'auto'
            }
        });
        $('#panel-op').css({'filter' : 'blur(4px)'});
	} else {
		$('.bloqued').unblock();
		$('#panel-op').css({'filter' : 'blur(0px)'});
	}
}

