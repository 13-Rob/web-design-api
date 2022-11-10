const usersCtrl = {}

const user = require('../models/users.js')
//const users = require('../routes/data/users.json');

usersCtrl.getUsers = async (req, res) =>{
    const users = await user.find();
    res.json(users);
}

module.exports = usersCtrl;