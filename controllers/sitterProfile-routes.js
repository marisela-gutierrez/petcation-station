const router = require('express').Router();
const { User, Pet_Sitter, User_picture } = require('../models');


router.get('/', (req, res) => {
    Pet_Sitter.findAll({
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
        ],
        include: [
            {
                model: User,
                attributes: ['first_name', 'last_name', 'email', 'phone'],
                include: [
                    {
                        model: User_picture,
                        attributes: ['picture_url']
                    }
                ]
            }
        ]
    })
        .then(dbpetSitterData => {
            // pass a single pet object into the homepage template
            const sitters = dbpetSitterData.map(sitter => sitter.get({ plain: true }));
            res.render('sitterMiniProfiles', { sitters, loggedIn: req.session.loggedIn });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

router.get('/petSitters/:id', (req, res) => {
    Pet_Sitter.findOne({
        where: {
            id: req.params.id
        },
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
        ],
        include: [
            {
                model: User,
                attributes: ['first_name', 'last_name', 'email', 'phone'],
                include: [
                    {
                        model: User_picture,
                        attributes: ['picture_url']
                    }
                ]
            }
        ]
    })
        .then(dbpetSitterData => {
            if (!dbpetSitterData) {
                res.status(404).json({ message: 'No Pet Sitter found with this id' });
                return;
            }
            // serialize the data
            const sitter = dbpetSitterData.get({ plain: true });

            // pass data to template
            res.render('sitterFullProfile', {
                sitter,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;