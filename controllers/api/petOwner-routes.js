const router = require('express').Router();
const { userInfo } = require('os');
const { Pet_Owners } = require('../../models');

router.get('/', (req, res) => {
    Pet_Owners.findAll({
        attributes: [
            'id',
            'hosting_preference',
            'bio',
            'socials',
            'contact'
        ]
        // include: [
        //     {
        //         model: User,
        //         attributes: []
        //     }
        // ]
    })
        .then(dbpetOwnersData => res.json(dbpetOwnersData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

router.get('/:id', (req, res) => {
    Pet_Owners.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'hosting_preference',
            'bio',
            'socials',
            'contact'
        ]
        // include: [
        //     {
        //         model: User,
        //         attributes: []
        //     }
        // ]
    })
        .then(dbpetOwnersData => {
            if (!dbpetOwnersData) {
                res.status(404).json({ message: 'No Pet Owner found with this id' });
                return;
            }
            res.json(dbpetOwnersData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    Pet_Owners.create({
        hosting_preference: req.body.hosting_preference,
        bio: req.body.bio,
        socials: req.body.socials,
        contact: req.body.contact
    })
        .then(dbpetOwnersData => res.json(dbpetOwnersData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
});

router.put('/:id', (req, res) => {
    Pet_Owners.update(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(dbpetOwnersData => {
            if (!dbpetOwnersData[0]) {
                res.status(404).json({ message: 'No Pet Owners found with this id' });
                return;
            }
            res.json(dbpetOwnersData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.delete('/:id', (req, res) => {
    Pet_Owners.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbpetOwnersData => {
            if (!dbpetOwnersData) {
                res.status(404).json({ message: 'No Pet Owners found with this id' });
                return;
            }
            res.json(dbpetOwnersData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;