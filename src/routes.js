const express = require('express');
const UserController = require('./controllers/userController');
const routes = express.Router();

routes.post('/users', UserController.store);
routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.index1);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id',UserController.delete)

module.exports = routes