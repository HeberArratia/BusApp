var sockets = function(io){
	require('../apps/trayecto/controllersocket.js')(io);
};

//Exportamos la funcion 
module.exports = sockets;