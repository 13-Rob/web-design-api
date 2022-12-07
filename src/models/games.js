const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    title: { type: String, required: true },
    coverURL: { type: String, required: false },
    score: { type: String, required: false },
    genre: { type: String, required: false },
    description: { type: String, required: false },
    release_day: { type: String, required: true },
    trailerURL: { type: String, required: false }
}, {
    timestamps: true
})

module.exports = model('Game', UserSchema);
