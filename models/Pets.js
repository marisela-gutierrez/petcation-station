const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Pets extends Model { }

Pets.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        pet_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        age: {
            type: DataTypes.STRING,
            allowNull: false
        },
        species: {
            type: DataTypes.STRING,
            allowNull: false
        },
        bio: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        breed: {
            type: DataTypes.STRING,
            allowNull: false
        },
        gender: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        interactive: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        feeding_habits: {
            type: DataTypes.STRING,
            allowNull: false
        },
        neutered_spayed: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        potty_trained: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        owner_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'petOwner',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Pets'
    }
);

module.exports = Pets;