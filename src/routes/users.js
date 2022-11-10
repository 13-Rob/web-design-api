const { Router } = require('express');
const router = Router();

const usersCtrl = require('../controllers/users.controller');

// Pasa la informacion de todos los usuarios.
router.get('/', usersCtrl.getUsers);

// Pasa la informacion del usuario especifico basado en la id.
router.get('/:id', usersCtrl.getUser);

// Actualiza la informacion de un usuario
router.put('/:id', usersCtrl.updateUser);

// Crea un nuevo usuario
router.post('/signup', usersCtrl.signUp);

// Inicia sesion de un usuario
router.post('/login', usersCtrl.logIn);

// Elimina un usuario en especifico
router.delete('/:id', usersCtrl.deleteUser);

module.exports = router;
