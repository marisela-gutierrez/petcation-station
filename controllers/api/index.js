const router = require('express').Router();
const petOwnerRoutes = require('./petOwner-routes');
const userRoutes = require('./user-routes.js');

router.use('/users', userRoutes);
router.use('/petOwners', petOwnerRoutes);

module.exports = router;