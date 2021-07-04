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
                        attributes: ['first_name', 'last_name', 'email', 'phone']
                    }
                ]
            }
        ]
    })
        .then(dbPets => {
            // pass a single pet object into the homepage template
            const pets = dbPets.map(pet => pet.get({ plain: true }));
            res.render('petMiniProfiles', { pets, loggedIn: req.session.loggedIn });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

router.get('/pets/:id', (req, res) => {
    Pets.findOne({
        where: {
            id: req.params.id
        },
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
            'potty_trained',
        ],
        include: [
            {
                model: Pet_Owner,
                attributes: ['id'],
                include: [
                    {
                        model: User,
                        attributes: ['first_name', 'last_name', 'email', 'phone', 'profile_pic']
                    }
                ]
            }
        ]
    })
        .then(dbPets => {
            if (!dbPets) {
                res.status(404).json({ message: 'No Pet found with this id' });
                return;
            }
            // serialize the data
            const pet = dbPets.get({ plain: true });

            // pass data to template
            res.render('petFullProfile', {
                pet,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});



module.exports = router;
