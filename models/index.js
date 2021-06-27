const Pet_Owner = require('./Pet_Owner');
const User = require('./User');

User.hasOne(Pet_Owner, {
    foreignKey: 'user_id'
});

Pet_Owner.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { Pet_Owner, User };