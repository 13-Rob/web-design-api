const usersCtrl = {}

const user = require('../models/users.js');
//const users = require('../routes/data/users.json')

usersCtrl.getUsers = async (req, res) => {
    const users = await user.find();
    res.json(users);
}

usersCtrl.getUser = async (req, res) => {
    const userF = await user.findById(req.params.id);
    res.send(userF);
}

usersCtrl.signUp = async (req, res) => {
    const newUser = new user(req.body);
    await newUser.save();
    res.send({ message: 'User Created' });
}

usersCtrl.logIn = async (req, res) => {
    const x = await user.find({ username: req.body.username, password: req.body.password });
    if (x == 0) {
        res.send({ message: false });
    }
    else {
        res.send({ message: true });
    }
}

usersCtrl.updateUser = async (req, res) => {
    const userF = await user.findByIdAndUpdate(req.params.id, req.body);
    res.send({ message: 'User Updated', userF });
}

usersCtrl.deleteUser = async (req, res) => {
    const userF = await user.findByIdAndDelete(req.params.id);
    res.send({ message: 'User Deleted', userF });
}

module.exports = usersCtrl;
