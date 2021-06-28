const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Pet_pictures extends Model {}

User_pictures.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
          },
        picture_url: {
            type: DataTypes.STRING,
            defaultValue:'https://ucarecdn.com/a686ba0b-99fe-4e9d-becb-7c2bd4dd7768/mypet.jpg',
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'pet',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'petPicture'
    }
);

module.exports = Pet_pictures;