const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User_picture extends Model { }

User_picture.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        picture_url: {
            type: DataTypes.STRING,
            defaultValue: 'https://ucarecdn.com/c14107eb-3afa-4862-a40c-52119d8cc218/no_picture.jpg',
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
        modelName: 'userPicture'
    }
);

module.exports = User_picture;