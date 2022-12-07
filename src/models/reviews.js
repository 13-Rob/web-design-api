const { Schema, model } = require('mongoose');

const ReviewSchema = new Schema({
    title: { type: String, required: true },
    score: { type: String, required: true },
    reviewC: { type: String, required: false },
    game: { type: String, required: true },
    author: { type: String, required: true }
}, {
    timestamps: true
})

module.exports = model('Review', ReviewSchema);
