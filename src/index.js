require('./databse')
const express = require('express');
const app = express();
const morgan = require('morgan');


// Configuraciones
app.set('port', 3000);
app.set('json spaces', 2)

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Rutas
app.use('/api/routes', require('./routes/routes'));
app.use('/api/games', require('./routes/games'));
app.use('/api/news', require('./models/news'));
app.use('/api/reviews', require('./routes/reviews'));
app.use('/api/users', require('./routes/users'));

// Empezar el Servidor
app.listen(app.get('port'));
console.log("Hola mundito!");