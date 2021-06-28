const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const petOwnerRoutes = require('./petOwner-routes');
const petSitteroutes = require('./petSitter-routes');
const reviewRoutes = require('./review-routes')

router.use('/users', userRoutes);
router.use('/petOwners', petOwnerRoutes);
router.use('/petSitters', petSitteroutes)
router.use('/reviews', reviewRoutes)

module.exports = router;