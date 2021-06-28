const User = require('./User');
const Pet_Owner = require('./Pet_Owner');
const Pet_Sitter = require('./Pet_Sitter');
const Review = require('./Review');

User.hasOne(Pet_Owner, {
    foreignKey: 'user_id'
});

Pet_Owner.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasOne(Pet_Sitter, {
    foreignKey: 'user_id'
});

Pet_Sitter.belongsTo(User, {
    foreignKey: 'user_id'
});

Pet_Owner.belongsToMany(Pet_Sitter, {
    through: Review,
    as: 'reviewed_sitter',
    foreignKey: 'pet_owner_id'
});

Pet_Sitter.belongsToMany(Pet_Owner, {
    through: Review,
    as: 'reviewed_sitter',
    foreignKey: 'pet_sitter_id'
})

Review.belongsTo(Pet_Owner, {
    foreignKey: 'pet_owner_id'
});

Review.belongsTo(Pet_Sitter, {
    foreignKey: 'pet_sitter_id'
});

Pet_Owner.hasMany(Review, {
    foreignKey: 'pet_owner_id'
});

Pet_Sitter.hasMany(Review, {
    foreignKey: 'pet_sitter_id'
});

module.exports = { User, Pet_Owner, Pet_Sitter, Review };