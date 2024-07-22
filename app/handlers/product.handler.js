const Product = require('../models/Product')

//crear una funcion para el llamado a select del modelo
//envia parametros req y res
//req significa request = peticion
//res significa response = respuesta
const listProduct = async (req,res)=>{
    try{
        // llamado a funcion de select
        const product = await Product.getProducts();
        res.json(product); //parsea a json y retorna la respuesta
    }catch (error){
        res.status(500).json({error: error.message })
    }
}

const insertProduct = async(req,res)=>{
    try{
        const product =await Product.insert(req.body); 
        //201 para crear
        res.status(201).json(product)
    }catch (error){
        res.status(500).json({error: error.message })
    }
}



module.exports ={
    listProduct,
    insertProduct
}