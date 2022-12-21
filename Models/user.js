const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class User extends Model {};

User.init(
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
  }, {
  hooks: {
    beforeCreate: userObj => {
      userObj.password = bcrypt.hashSync(userObj.password, 8);
      return userObj
    }
  },
  sequelize
});

module.exports = User;