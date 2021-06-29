const router = require('express').Router();
const userRoutes = require('./user-routes');
const petOwnerRoutes = require('./petOwner-routes');
const petSitteroutes = require('./petSitter-routes');
const userPicturesRoutes = require ('./userPicture-routes');
const petPicturesRoutes = require('./petPicture-routes');

router.use('/userPicture', userPicturesRoutes);
router.use('/users', userRoutes);
router.use('/petPicture', petPicturesRoutes);
router.use('/petOwners', petOwnerRoutes);
router.use('/petSitters', petSitteroutes)

module.exports = router;