const express = require('express'); //llamando a framework

//llamar a handlers para api
const customerHandler = require('./app/handlers/customer.handler');
const productHandler = require('./app/handlers/product.handler');
const paymentMethodsHandler = require('./app/handlers/paymentMethods.handler');
const orderHandler = require('./app/handlers/order.handler');
const invoiceHandler = require('./app/handlers/invoice.handler');
const saleHandler = require('./app/handlers/sale.handler');
//variable para encapsular rutas
const router = express.Router();

//registrar las rutas
//rutas de customer
router.get('/customers', customerHandler.listCustomer) //obtener cliente
router.post('/customers', customerHandler.insertCustomer)// insertar cliente
router.patch('/customers/:id', customerHandler.updateCustomer)//actualizar cliente
router.delete('/customers/:id', customerHandler.deleteCustomer)//eliminar cliente

//rutas de product
router.get('/products', productHandler.listProduct) //obtener 
router.post('/products', productHandler.insertProduct)// insertar 

//rutas de pymentMethods
router.get('/paymentMethods', paymentMethodsHandler.listPaymentMethods) //obtener 
router.post('/paymentMethods', paymentMethodsHandler.insertPaymentMethods)// insertar 

//rutas de order
router.get('/orders', orderHandler.listOrder) //obtener 
router.post('/orders', orderHandler.insertOrder)// insertar 

//rutas de invoice
router.get('/invoices', invoiceHandler.listInvoice) //obtener 
router.post('/invoices', invoiceHandler.insertInvoice)// insertar 

//rutas de product
router.get('/sales', saleHandler.listSale) //obtener 
router.post('/sales', saleHandler.insertSale)// insertar 

//otras rutas .....
module.exports=router;