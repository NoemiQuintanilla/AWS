const { Model } =require('objection'); //llamar model de la libreria objection (hereda las caracteristica para realizar un modelo)

class Invoice extends Model { //creo la herencia del modelo
    static get tableName(){ // especifica el nombre de la tabla
        return 'invoice';
    }

    static get jsonSchema(){ // especifica la estructura de la tabla
        return {
            type: 'object',//object para un dato,array para una lista
            required: ['invoice_number'],//campos requeridos
            properties: { // estructura de los campos
                id: {type: 'integer'},
                invoice_number: {type: 'string'},
                total_amount: {type: 'number'},
                fecha: {type: 'string', format: 'date'},
                numProductos: {type: 'integer'},
                descripcion: {type: 'string'},
                deCustomer: {type: 'integer'},
                dePaymentMethods: {type: 'integer'},
                deSales: {type: 'integer'}

            }
        };
    }

    static async getInvoice(){ // metodo para listar 
        return await Invoice.query(); // select * from customer
    }

    static async insert(data){// metodo para insertar 
        return await Invoice.query()
            .insert(data); //insert into customer values ....
    }
}

module.exports = Invoice;