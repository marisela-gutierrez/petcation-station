const router = require('express').Router();

const petOwnerRoutes = require('./petOwner-routes');

router.use('/petOwners', petOwnerRoutes);

module.exports = router;