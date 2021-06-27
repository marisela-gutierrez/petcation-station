const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Pet_Sitter extends Model { }

Pet_Sitter.init(
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
        pet_skills: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price_per_day: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        neutering: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        availability: {
            type: DataTypes.TEXT,
            allowNull: true
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
        modelName: 'petSitter'
    }
);

module.exports = Pet_Sitter;