const router = require('express').Router();
const sequelize = require('../config/connection');
const { User } = require('../models');
const { withAuth, petOwnerAuth } = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
  res.render('dashboard', { loggedIn: true });
});

module.exports = router;