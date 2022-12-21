const { Model, DataTypes, NOW } = require('sequelize');
const sequelize = require('../config/connection')
const moment = require('moment');

class Comment extends Model { };

Comment.init(
    {
        body: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        date: {
            type: DataTypes.DATE,
            defaultValue: NOW,
            allowNull: false,
            validate: {
                isDate: true
            }
        },
        createdAt: {
            type: DataTypes.DATE,
            get() {
                return moment(this.getDataValue('createdAt').format('DD/MM/YYY h:mm:ss'))
            }
        }
    }, {
    sequelize
});