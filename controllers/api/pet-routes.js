const router = require('express').Router();
const { Pets, Pet_Owner, User } = require('../../models');

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
                        attributes: ['first_name', 'last_name', 'email', 'phone', 'profile_pic']
                    }
                ]
            }
        ]
    })
        .then(dbPets => res.json(dbPets))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

router.get('/:id', (req, res) => {
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
            res.json(dbPets);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    Pets.create({
        pet_name: req.body.pet_name,
        age: req.body.age,
        species: req.body.species,
        bio: req.body.bio,
        breed: req.body.breed,
        gender: req.body.gender,
        interactive: req.body.interactive,
        feeding_habits: req.body.feeding_habits,
        neutered_spayed: req.body.neutered_spayed,
        potty_trained: req.body.potty_trained,
        owner_id: req.session.petOwnerId
    })
        .then(dbPets => res.json(dbPets))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
});

router.put('/:id', (req, res) => {
    Pets.update(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(dbPets => {
            if (!dbPets[0]) {
                res.status(404).json({ message: 'No Pet found with this id' });
                return;
            }
            res.json(dbPets);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.delete('/:id', (req, res) => {
    Pets.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbPets => {
            if (!dbPets) {
                res.status(404).json({ message: 'No Pet found with this id' });
                return;
            }
            res.json(dbPets);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;