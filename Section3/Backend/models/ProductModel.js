const {Schema,model } = require('../connection');

const ProductSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    brand:{ type: String, required: true },
    category: { type: String, required: true },
     stock: { type: Number, required: true }
})

    module.exports= model('products', ProductSchema);
