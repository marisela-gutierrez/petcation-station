const router = require('express').Router();
const userRoutes = require('./user-routes');
const petOwnerRoutes = require('./petOwner-routes');
const petSitteroutes = require('./petSitter-routes');
const userPicturesRoutes = require('./userPicture-routes');
const petPicturesRoutes = require('./petPicture-routes');
const reviewRoutes = require('./review-routes');
const petRoutes = require('./pet-routes');

router.use('/users', userRoutes);
router.use('/userPicture', userPicturesRoutes);
router.use('/petPicture', petPicturesRoutes);
router.use('/petOwners', petOwnerRoutes);
router.use('/petSitters', petSitteroutes);
router.use('/reviews', reviewRoutes);
router.use('/pets', petRoutes);

module.exports = router;