const { Model } =require('objection'); //llamar model de la libreria objection (hereda las caracteristica para realizar un modelo)

class PaymentMethods extends Model { //creo la herencia del modelo
    static get tableName(){ // especifica el nombre de la tabla
        return 'paymentmethods';
    }

    static get jsonSchema(){ // especifica la estructura de la tabla
        return {
            type: 'object',//object para un dato,array para una lista
            required: ['name','type'],//campos requeridos
            properties: { // estructura de los campos
                id: {type: 'integer'},
                name: {type: 'string', minLength: 1},
                type: {type: 'string'},
                card_number: {type: 'string'},
                expiry_date: {type: 'string' , format: 'date'},
                monto: {type: 'number'}

            }
        };
    }

    static async getPaymentMethods(){ // metodo para listar 
        return await PaymentMethods.query(); // select * from customer
    }

    static async insert(data){// metodo para insertar 
        return await PaymentMethods.query()
            .insert(data); //insert into customer values ....
    }
}

module.exports = PaymentMethods;