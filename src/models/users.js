// /opt/homebrew/var/mongodb/
const { Schema, model } = require('mongoose')
const UserSchema = new Schema ({
    email:{type:String, required:true},
    username:{type:String, required:true},
    password:{type:String, required:true},
    gender:{type:String, required:true},
    birthday:{type:String, required:true},
    day_joined:{type:String, required:true},
    games_played:{type:String, required:true}
},{
    timestamps:true // agregar tiempo de creacion y modificacion
})

model.exports = model('Users', UserSchema)