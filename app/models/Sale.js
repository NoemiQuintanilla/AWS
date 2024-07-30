const { Model } =require('objection'); //llamar model de la libreria objection (hereda las caracteristica para realizar un modelo)

class Sale extends Model { //creo la herencia del modelo
    static get tableName(){ // especifica el nombre de la tabla
        return 'sales';
    }

    static get jsonSchema(){ // especifica la estructura de la tabla
        return {
            type: 'object',//object para un dato,array para una lista
            required: ['total_amount'],//campos requeridos
            properties: { // estructura de los campos
                id: {type: 'integer'},
                total_amount: {type: 'number'},
                sale_date: {type: 'string' , format: 'date'},
                active: {type: 'boolean'},
                fecha: {type: 'string' , format: 'date'},
                direccion: {type: 'string'},
               

            }
        };
    }

    static async getSales(){ // metodo para listar 
        return await Sale.query(); // select * from customer
    }

    static async insert(data){// metodo para insertar 
        return await Sale.query()
            .insert(data); //insert into customer values ....
    }
}

module.exports = Sale;