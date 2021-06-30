const router = require('express').Router();
const dashboardRoutes = require('./dashboard-routes');
const homeRoutes = require('./home-routes');
const apiRoutes = require('./api');
const petMiniRoutes = require('./petMini-routes');
const userProfile = require('./userProfile-routes');

router.use('/dashboard', dashboardRoutes);
router.use('/', homeRoutes);
router.use('/petProfiles', petMiniRoutes);
router.use('/api', apiRoutes);
router.use('/userProfile', userProfile);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;