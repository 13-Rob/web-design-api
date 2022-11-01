const express = require('express');
const app = express();
const morgan = require('morgan');

// xd
//algo
// Configuraciones
app.set('port', 3000);
app.set('json spaces', 2)

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Rutas
app.use('/api/juegos', require('./routes/routes'));

// Empezar el Servidor
app.listen(app.get('port'));
console.log("Hola mundito!");