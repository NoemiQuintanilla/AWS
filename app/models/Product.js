const { Model } =require('objection'); //llamar model de la libreria objection (hereda las caracteristica para realizar un modelo)

class Product extends Model { //creo la herencia del modelo
    static get tableName(){ // especifica el nombre de la tabla
        return 'products';
    }

    static get jsonSchema(){ // especifica la estructura de la tabla
        return {
            type: 'object',//object para un dato,array para una lista
            required: ['name','price'],//campos requeridos
            properties: { // estructura de los campos
                id: {type: 'integer'},
                name: {type: 'string', minLength: 1},
                price: {type: 'number'},
                stock: {type: 'integer'},
                active: {type: 'boolean'},
                descripcion: {type: 'string'},
                release_date: {type: 'string' , format: 'date'},
                categoria: {type: 'string'}

            }
        };
    }

    static async getProducts(){ // metodo para listar 
        return await Product.query(); // select * from customer
    }

    static async insert(data){// metodo para insertar 
        return await Product.query()
            .insert(data); //insert into customer values ....
    }
}

module.exports = Product;