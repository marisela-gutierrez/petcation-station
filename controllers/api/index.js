const router = require('express').Router();
const userRoutes = require('./user-routes');
const petOwnerRoutes = require('./petOwner-routes');
const petSitteroutes = require('./petSitter-routes');

router.use('/users', userRoutes);
router.use('/petOwners', petOwnerRoutes);
router.use('/petSitters', petSitteroutes)

module.exports = router;