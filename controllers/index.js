const router = require('express').Router();
const homeRoutes = require('./home-routes');
const signupRoutes = require('./signup-routes');
const apiRoutes = require('./api');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/signup', signupRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;