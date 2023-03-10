const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection')


class Comment extends Model { }

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
          },
          user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'user',
              key: 'id'
            }
          },
          post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'post',
              key: 'id'
            }
          },
        content: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {

        sequelize

    });

module.exports = Comment;