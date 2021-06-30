const User = require('./User');
const Pet_Owner = require('./Pet_Owner');
const Pet_Sitter = require('./Pet_Sitter');
const User_picture = require('./User_picture');
const Pets = require('./Pets');
const Pet_picture = require('./Pet_picture');
const Review = require('./Review');

User.hasOne(Pet_Owner, {
    foreignKey: 'user_id'
});

Pet_Owner.belongsTo(User, {
    foreignKey: 'user_id'
});

Pet_Owner.hasMany(Pets, {
    foreignKey: 'owner_id'
});

Pets.belongsTo(Pet_Owner, {
    foreignKey:'owner_id'
});

User.hasOne(Pet_Sitter, {
    foreignKey: 'user_id'
});

Pet_Sitter.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasOne(User_picture, {
    foreignKey: 'user_id'
});

User_picture.belongsTo(User, {
    foreignKey: 'user_id'
});

Pets.hasOne(Pet_picture, {
    foreignKey: 'pet_id'
});

Pet_picture.belongsTo(Pets, {
    foreignKey: 'pet_id'
});


module.exports = { User, Pet_Owner, Pet_Sitter, Pets, Pet_picture, User_picture, Review };
