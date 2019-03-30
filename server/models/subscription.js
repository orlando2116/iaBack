const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let subsriptionSchema = new Schema({
    name: {
        type: String,
        required: [true, 'El nombre es necesario'] 
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'El correo es necesario']
    },
    phone: {
        type: String,       
        required: [true, 'El telefono es necesario']
    },
    rut: {
        type: String,
        required: [true, 'la contraseña es obligatoria']
    }
});

module.exports = mongoose.model('Subscription', subsriptionSchema);