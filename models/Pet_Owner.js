const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Pet_Owner extends Model { }

Pet_Owner.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        hosting_preference: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: 'At-Home'
        },
        bio: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        socials: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        contact: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'petOwner'
    }
);

module.exports = Pet_Owner;