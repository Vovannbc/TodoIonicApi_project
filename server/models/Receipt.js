var mongoose = require('mongoose');

const ReceiptSchema = new mongoose.Schema({
    title: String,
    ingredients: [],
    description: String
});

const Receipt = mongoose.model('Receipt', ReceiptSchema);

module.exports = Receipt;