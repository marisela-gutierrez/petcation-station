const router = require('express').Router();
const { userInfo } = require('os');
const { User, Pet_Owner, Pet_Sitter, Review } = require('../../models');

router.get('/', (req, res) => {
    Review.findAll({
        attributes: [
            'id',
            'title',
            'text'
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
            },
            {
                model: Pet_Sitter,
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
        .then(dbreviewData => res.json(dbreviewData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

router.get('/:id', (req, res) => {
    Review.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'title',
            'text'
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
            },
            {
                model: Pet_Sitter,
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
        .then(dbreviewData => {
            if (!dbreviewData) {
                res.status(404).json({ message: 'No Reviews found with this id' });
                return;
            }
            res.json(dbreviewData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    Review.create({
        title: req.body.title,
        text: req.body.text,
        pet_owner_id: req.body.pet_owner_id,
        pet_sitter_id: req.body.pet_sitter_id
    })
        .then(dbreviewData => res.json(dbreviewData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
});

router.put('/:id', (req, res) => {
    Review.update(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(dbreviewData => {
            if (!dbreviewData[0]) {
                res.status(404).json({ message: 'No Reviews found with this id' });
                return;
            }
            res.json(dbreviewData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.delete('/:id', (req, res) => {
    Review.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbreviewData => {
            if (!dbreviewData) {
                res.status(404).json({ message: 'No Reviews found with this id' });
                return;
            }
            res.json(dbreviewData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;