const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    email: { type: String, required: false },
    username: { type: String, required: true },
    password: { type: String, required: true },
    gender: { type: String, required: false },
    birthday: { type: String, required: false },
    day_joined: { type: String, required: true },
    games_played: { type: String, required: false }
}, {
    timestamps: true
})

module.exports = model('User', UserSchema);
