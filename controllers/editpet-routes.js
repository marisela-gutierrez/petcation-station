const router = require('express').Router();
const sequelize = require('../config/connection');
const { withAuth, petOwnerAuth } = require('../utils/auth')
const { Pets, Pet_Owner, User } = require('../models');


router.get('/:id', petOwnerAuth, (req, res) => {
    Pets.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'pet_name',
            'age',
            'species',
            'bio',
            'breed',
            'gender',
            'interactive',
            'feeding_habits',
            'neutered_spayed',
            'potty_trained',
        ]
    })
        .then(dbPets => {
            if (!dbPets) {
                res.status(404).json({ message: 'No Pet found with this id' });
                return;
            }
            const pet = dbPets.get({ plain: true });
            res.render('editpet', { pet, loggedIn: req.session.loggedIn });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;