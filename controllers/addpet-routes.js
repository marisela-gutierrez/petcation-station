const router = require('express').Router();
const sequelize = require('../config/connection');
const { withAuth, petOwnerAuth } = require('../utils/auth')

router.get('/', petOwnerAuth, (req, res) => {
    res.render('addpet');
});

module.exports = router;