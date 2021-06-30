const router = require('express').Router();
const { userInfo } = require('os');
const { User, Pet_Sitter } = require('../../models');

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
                attributes: ['first_name', 'last_name', 'email', 'phone', 'profile_pic']
            }
        ]
    })
        .then(dbpetSitterData => res.json(dbpetSitterData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

router.get('/:id', (req, res) => {
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
                attributes: ['first_name', 'last_name', 'email', 'phone', 'profile_pic']
            }
        ]
    })
        .then(dbpetSitterData => {
            if (!dbpetSitterData) {
                res.status(404).json({ message: 'No Pet Sitter found with this id' });
                return;
            }
            res.json(dbpetSitterData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    Pet_Sitter.create({
        hosting_preference: req.body.hosting_preference,
        bio: req.body.bio,
        socials: req.body.socials,
        contact: req.body.contact,
        pet_skills: req.body.pet_skills,
        price_per_day: req.body.price_per_day,
        neutering: req.body.neutering,
        availability: req.body.availability,
        user_id: req.session.user_id
    })
        .then(dbpetSitterData => {
            req.session.petSitterId = dbpetSitterData.id;
            res.json(dbpetSitterData)
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
});

router.put('/:id', (req, res) => {
    Pet_Sitter.update(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(dbpetSitterData => {
            if (!dbpetSitterData[0]) {
                res.status(404).json({ message: 'No Pet Sitter found with this id' });
                return;
            }
            res.json(dbpetSitterData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.delete('/:id', (req, res) => {
    Pet_Sitter.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbpetSitterData => {
            if (!dbpetSitterData) {
                res.status(404).json({ message: 'No Pet Sitter found with this id' });
                return;
            }
            res.json(dbpetSitterData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;