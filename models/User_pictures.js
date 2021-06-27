const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User_pictures extends Model {}

User_pictures.init (
    {
        picture_url: {
            type: DataTypes.STRING,
            defaultValue:'https://ucarecdn.com/c14107eb-3afa-4862-a40c-52119d8cc218/no_picture.jpg',
        }
    }
)