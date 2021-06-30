const router = require('express').Router();
const sequelize = require('../config/connection');
const withAuth = require('../utils/auth');
const { User, Pet_Owner, Pet_Sitter, Pet, Pet_picture, User_picture, Review } = require('../models');

router.get('/', withAuth, (req, res) => {
    Pet.findAll({
        attributes: [
            'pet_name',
            'species',
            'gender',
            'age'
        ]
    })
        .then(dbPetData => {
            const pet = dbPetData.map(post => post.get({ plain: true }));
            console.log(pet);
            res.render('pet-dashboard', { pet });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;