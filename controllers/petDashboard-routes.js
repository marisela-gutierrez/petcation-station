const router = require('express').Router();
const sequelize = require('../config/connection');
const { withAuth, petOwnerAuth } = require('../utils/auth');
const { User, Pet_Owner, Pet_Sitter, Pets, Pet_picture, User_picture, Review } = require('../models');

router.get('/', petOwnerAuth, (req, res) => {
    Pets.findAll({
        where: {
            owner_id: req.session.petOwnerId
        },
        attributes: [
            'id',
            'pet_name',
            'species',
            'gender',
            'age'
        ]
    })
        .then(dbPetData => {
            const pet = dbPetData.map(post => post.get({ plain: true }));
            res.render('pet-dashboard', { pet, loggedIn: req.session.loggedIn });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;