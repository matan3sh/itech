const mongoose = require('mongoose');

const accessoriesSchema = mongoose.Schema({
    name:{
        required: true,
        type: String,
        unique: 1,
        maxlength: 100
    }
});

const Accessories = mongoose.model('Accessories',accessoriesSchema);

module.exports = { Accessories }