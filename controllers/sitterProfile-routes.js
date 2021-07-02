const router = require('express').Router();
const { User, Pet_Sitter } = require('../models');

router.get('/', (req, res) => {
  Pet_Sitter.findAll({
      attributes: [
          'id',
          'hosting_preference',
          'bio',
          'socials',
          'contact',
          'pet_skills',
          'price_per_day',
          'neutering',
          'availability'
      ],
      include: [
          {
              model: User,
              attributes: ['first_name', 'last_name', 'email', 'phone', 'profile_pic']
          }
      ]
  })
      .then(dbpetSitterData => {
          // pass a single pet object into the homepage template
          const sitters = dbpetSitterData.map(sitter => sitter.get({ plain: true }));
          res.render('sitterMiniProfiles', { sitters });
      })
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      })
});

module.exports = router;