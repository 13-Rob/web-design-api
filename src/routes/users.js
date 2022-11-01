const { Router } = require('express');
const router = Router();

const users = require('./data/users.json');
console.log(users);

// Pasa la informacion de todos los usuarios.
router.get('/', (req, res) => {
    res.json(users);
})

// Pasa la informacion del usuario especifico sin la id ni el password.
router.get('/:id', (req, res) => {
    const id = req.params.id;

    users.forEach(user => {
        if(user.id == id){
            res.json([
                {
                    "username": user.username,
                    "gender": user.gender,
                    "birthday": user.birthday,
                    "day joined": user['day joined'],
                    "games played": user['games played']
                }
            ])
        }
    })
})

router.post('/signup', (req, res) => {
    const {email, username, password} = req.body;
    if(email && username && password){
        const id = users.length;
        const newUser = {id, ...req.body};
        users.push(newUser);

        res.status(201).json(newUser);
    }else{
        res.status(500).json({error: 'no data'});
    }
})

router.post('/login', (req, res) => {
    const {username, password} = req.body;
    if(username && password){
        users.forEach(user => {
            if(user.username == username){
                if(user.password == password){
                    res.send('You log in successfully');
                }else{
                    res.send('That is not the right password');
                }
            }
        })
    }else{
        res.status(500).json({error: 'no data'});
    }
})

module.exports = router;