const User = require('./User');
const Pet_Owner = require('./Pet_Owner');
const Pet_Sitter = require('./Pet_Sitter');

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

module.exports = { User, Pet_Owner, Pet_Sitter };