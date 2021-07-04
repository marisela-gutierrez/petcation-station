const router = require('express').Router();

router.get('/signup', (req, res) => {
  res.render('signup', { loggedIn: req.session.loggedIn });
});

module.exports = router;
