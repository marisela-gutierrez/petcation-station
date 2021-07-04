const router = require('express').Router();
const sequelize = require('../config/connection');
const { User } = require('../models');
const { withAuth, petOwnerAuth } = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
  console.log(req.session);
  res.render('dashboard', { loggedIn: req.session.loggedIn, user_id: req.session.user_id });
});



module.exports = router;