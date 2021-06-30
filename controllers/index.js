const router = require('express').Router();


const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const petMiniRoutes = require('./petMini-routes.js');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/petProfiles', petMiniRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;