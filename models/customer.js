const mongoose = require('mongoose')

const customerschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
})

 module.exports = mongoose.model('Customer', customerschema)
// var Customer = mongoose.model('Customer', customerschema);

// module.exports = Customer