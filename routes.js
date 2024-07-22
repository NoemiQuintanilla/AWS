const express = require('express'); //llamando a framework

//llamar a handlers para api
const customerHandler = require('./app/handlers/customer.handler');

//variable para encapsular rutas
const router = express.Router();

//registrar las rutas
//rutas de customer
router.get('/customers', customerHandler.listCustomer) //obtener cliente
router.post('/customers', customerHandler.insertCustomer)// insertar cliente
router.patch('/customers/:id', customerHandler.updateCustomer)//actualizar cliente
router.delete('/customers/:id', customerHandler.deleteCustomer)//eliminar cliente


//otras rutas .....
module.exports=router;