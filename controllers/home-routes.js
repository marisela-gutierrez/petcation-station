const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('homepage');
});

router.get('/signup', (req, res) => {
    res.render('signup');
  });

  router.get('/uploader', (req, res) => {
    res.render('pictureUploader');
  });

module.exports = router; 