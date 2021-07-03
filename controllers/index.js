const router = require('express').Router();
const dashboardRoutes = require('./dashboard-routes');
const homeRoutes = require('./home-routes');
const apiRoutes = require('./api');
const petProfileRoutes = require('./petProfile-routes');
const ownerSignup = require('./ownerSignup-routes');
const petDash = require('./petDashboard-routes');
const siiterSignup = require('./sitterSignup-routes');
const addpet = require('./addpet-routes')
const sitterProfileRoutes = require('./sitterProfile-routes');
const editpet = require('./editpet-routes');
const userProfile = require('./userProfile-routes');

router.use('/dashboard', dashboardRoutes);
router.use('/', homeRoutes);
router.use('/petProfiles', petProfileRoutes);
router.use('/ownerSignup', ownerSignup);
router.use('/sitterSignup', siiterSignup);
router.use('/petDashboard', petDash);
router.use('/addpet', addpet);
router.use('/editpet', editpet);
router.use('/api', apiRoutes);
router.use('/sitterProfiles', sitterProfileRoutes);
router.use('/userProfile', userProfile);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;