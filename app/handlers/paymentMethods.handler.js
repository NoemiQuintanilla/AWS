const PaymentMethods = require('../models/PaymentMethod')

//crear una funcion para el llamado a select del modelo
//envia parametros req y res
//req significa request = peticion
//res significa response = respuesta
const listPaymentMethods = async (req,res)=>{
    try{
        // llamado a funcion de select
        const paymentMethods = await PaymentMethods.getPaymentMethods();
        res.json(paymentMethods); //parsea a json y retorna la respuesta
    }catch (error){
        res.status(500).json({error: error.message })
    }
}

const insertPaymentMethods = async(req,res)=>{
    try{
        const paymentMethods =await PaymentMethods.insert(req.body); 
        //201 para crear
        res.status(201).json(paymentMethods)
    }catch (error){
        res.status(500).json({error: error.message })
    }
}



module.exports ={
    listPaymentMethods,
    insertPaymentMethods
}