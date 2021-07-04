const router = require('express').Router();
const { Pets, Pet_Owner, Pet_Sitter, User } = require('../models');
const User_picture = require('../models/User_picture');

router.get('/:id', (req, res) => {
    User.findOne({
        attributes: { exclude: ['password'] },
        where: {
            id: req.params.id
        },
        include: [
            {
                model: User_picture,
                attributes: ['picture_url']
            },
            {
                model: Pet_Sitter,
                attributes: [
                    'id',
                    'hosting_preference',
                    'bio',
                    'socials',
                    'contact',
                    'pet_skills',
                    'price_per_day',
                    'neutering',
                    'availability'
                ]
            },
            {
                model: Pet_Owner,
                attributes: [
                    'id',
                    'hosting_preference',
                    'bio',
                    'socials',
                    'contact'
                ],
                include: [
                    {
                        model: Pets,
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
                        ]
                    }
                ]
            }
        ]
    }).then(dbUser => {
        // pass a single pet object into the homepage template
        const user = dbUser.get({ plain: true });
        console.log(user);
        res.render('userProfile', { user});
    })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;