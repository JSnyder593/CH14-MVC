const { Model, DataTypes } = require('sequelize');

class Comment extends Model {};

Comment.init(
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