const router = require('express').Router();
const User_picture = require('../../models/User_picture');

router.get('/:id', (req, res) => {
    User_picture.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'picture_url'
        ]
    })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No picture found with this id' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    User_picture.create({
        user_id: req.body.user_id,
        picture_url: req.body.picture_url
    })
        .then(dbPictureData => res.json(dbPictureData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
});

router.put('/:id', (req, res) => {
    User_picture.update(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(dbPictureData => {
            if (!dbPictureData[0]) {
                res.status(404).json({ message: 'No picture found with this id' });
                return;
            }
            res.json(dbPictureData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.delete('/:id', (req, res) => {
    User_picture.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbPictureData => {
            if (!dbPictureData) {
                res.status(404).json({ message: 'No picture found with this id' });
                return;
            }
            res.json(dbPictureData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;