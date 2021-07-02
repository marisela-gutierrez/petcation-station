const router = require('express').Router();
const { Pets, Pet_Owner, User } = require('../models');

router.get('/', (req, res) => {
    Pets.findAll({
        attributes: [
            'id',
            'pet_name',
            'age',
            'species',
            'bio',
            'breed',
            'gender',
            'interactive',
            'feeding_habits',
            'neutered_spayed',
            'potty_trained'
        ],
        include: [
            {
                model: Pet_Owner,
                attributes: ['id'],
                include: [
                    {
                        model: User,
                        attributes: ['first_name', 'last_name']
                    }
                ]
            }
        ]
    })
        .then(dbPets => {
            // pass a single pet object into the homepage template
            const pets = dbPets.map(pet => pet.get({ plain: true }));
            res.render('petMiniProfiles', { pets });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});


module.exports = router;
