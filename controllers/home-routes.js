const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('homepage', { loggedIn: req.session.loggedIn });
});

router.get('/signup', (req, res) => {
  res.render('signup', { loggedIn: req.session.loggedIn });
});

module.exports = router;
