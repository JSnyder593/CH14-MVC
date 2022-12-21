const router = require('express').Router();
const { User, Entry } = require('../../models');
const bcrypt = require('bcrypt');


//gets all users
router.get('/', (req, res => {
    res.json(userData)
}).catch(err => res.status(500).json({ msg: "something went wrong", err })
))

//creates new user
router.post('/', (req, res => {
    console.log(req.body);
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }).then(newUser => {
        req.session.userId = newUser.id;
        req.session.loggedIn = true;
        res.json(newUser)
    }).catch(err => {
        console.log(err);
        res.status(500).json({ err })
    })
}))

//gets user by id
router.get('/id', (req, res) => {

})