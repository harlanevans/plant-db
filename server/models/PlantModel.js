const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const plantSchema = new Schema({
    name: { type: String, required: true },
    family: String,
    genus: String,
    year: Number,
    image: String
})

module.exports = mongoose.model('Plant', plantSchema)