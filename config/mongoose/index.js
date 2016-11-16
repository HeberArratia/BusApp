// Buena practica
'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fundadevcode');

module.exports = mongoose;