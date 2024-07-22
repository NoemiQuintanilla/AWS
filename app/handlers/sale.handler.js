const Sale = require('../models/Sale')

//crear una funcion para el llamado a select del modelo
//envia parametros req y res
//req significa request = peticion
//res significa response = respuesta
const listSale = async (req,res)=>{
    try{
        // llamado a funcion de select
        const sale = await Sale.getSales();
        res.json(sale); //parsea a json y retorna la respuesta
    }catch (error){
        res.status(500).json({error: error.message })
    }
}

const insertSale = async(req,res)=>{
    try{
        const sale =await Sale.insert(req.body); 
        //201 para crear
        res.status(201).json(sale)
    }catch (error){
        res.status(500).json({error: error.message })
    }
}



module.exports ={
    listSale,
    insertSale
}