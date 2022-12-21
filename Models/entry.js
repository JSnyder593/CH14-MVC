const { Model, DataTypes, NOW } = require('sequelize');
const sequelize = require('../config/connection');
const moment = require('moment');

class Entry extends Model { };

Entry.init(
    {
        body: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        date: {
            type: DataTypes.Date,
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
        },
        updatedAt: {
            type: DataTypes.DATE,
            get() {
                return moment(this.getDataValue('createdAt').format('DD/MM/YYY h:mm:ss'))
            }
        }
    },{
        sequelize
    }
)