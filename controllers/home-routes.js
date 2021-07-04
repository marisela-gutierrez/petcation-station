const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('homepage', {
    loggedIn: req.session.loggedIn,
    user_id: req.session.id});
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

module.exports = router;
