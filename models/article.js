const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    productName: { type: String, required: true },
    company: { type: String },
    price: { type: Number, required: true},
    productPictureLink: { type: String },
    linkShop: { type: String }
});

module.exports = mongoose.model('Article', articleSchema);