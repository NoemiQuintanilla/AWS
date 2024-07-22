const Order = require('../models/Order')

//crear una funcion para el llamado a select del modelo
//envia parametros req y res
//req significa request = peticion
//res significa response = respuesta
const listOrder = async (req,res)=>{
    try{
        // llamado a funcion de select
        const order = await Order.getOrder();
        res.json(order); //parsea a json y retorna la respuesta
    }catch (error){
        res.status(500).json({error: error.message })
    }
}

const insertOrder = async(req,res)=>{
    try{
        const order =await Order.insert(req.body); 
        //201 para crear
        res.status(201).json(order)
    }catch (error){
        res.status(500).json({error: error.message })
    }
}



module.exports ={
    listOrder,
    insertOrder
}