
const { Model } =require('objection'); //llamar model de la libreria objection (hereda las caracteristica para realizar un modelo)

class Order extends Model { //creo la herencia del modelo
    static get tableName(){ // especifica el nombre de la tabla
        return 'orders';
    }

    static get jsonSchema(){ // especifica la estructura de la tabla
        return {
            type: 'object',//object para un dato,array para una lista
            required: ['total_amount'],//campos requeridos
            properties: { // estructura de los campos
                id: {type: 'integer'},
                total_amount: {type: 'number'},
                order_date: {type: 'string' , format: 'date'},
                shipping_date: {type: 'string' , format: 'date'},
                shipping_address: {type: 'string' , format: 'date'},
                direccion: {type: 'string'},
                deProducts: {type: 'integer'}

            }
        };
    }

    static async getOrder(){ // metodo para listar 
        return await Order.query(); // select * from customer
    }

    static async insert(data){// metodo para insertar 
        return await Order.query()
            .insert(data); //insert into customer values ....
    }
}

module.exports = Order;