const { Model, DataTypes } = require('sequelize');

class Entry extends Model {};

Entry.init(
    {
        date: {
            type: DataTypes.Date,
            allowNull: false,
            validate: {
                isDate:true
            }
        },
        description: {
            type: DataTypes.STRING(120)
        }
    }
)