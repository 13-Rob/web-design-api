const usersCtrl = {}

const users = require('../models/users.js')
const user = require('../models/users.js')
//const users = require('../routes/data/users.json')

usersCtrl.getUsers = async (req, res) =>{
    const users = await user.find()
    res.json(users)
}

usersCtrl.getUser = async (req, res) =>{
    const userF = await user.findById(req.params.id);
    res.send(userF)
}

usersCtrl.signUp = async (req, res) =>{
    const newUser = new user(req.body);
    await newUser.save();
    res.send({message: 'User Created'})
}
// a
usersCtrl.logIn = (req, res) =>{
    console.log(req.body.username);
    console.log(req.body.password);
}

usersCtrl.updateUser = async (req, res) =>{
    const userF = await user.findByIdAndUpdate(req.params.id, req.body);
    res.send({message: 'User Updated', userF})
}

usersCtrl.deleteUser = async (req, res) =>{
    const userF = await user.findByIdAndDelete(req.params.id);
    res.send({message: 'User Deleted', userF})
}

module.exports = usersCtrl;
