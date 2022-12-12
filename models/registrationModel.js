const Sequelize = require("sequelize");
const db = require("../config/database");
const User = require("./userModel");

const { DataTypes } = Sequelize;

const Registration = db.define("Registration", {
  reg_id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV1,
    primaryKey: true,
  },
  month: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  slot: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  userID: {
    type: DataTypes.UUID,
    references: {
      model: User, // 'fathers' refers to table name
      key: "user_id", // 'id' refers to column name in fathers table
    },
  },
});
// Registration.belongsTo(User, {
//   foreignKey: "user_id",
//   constraints: false,
// });
User.hasMany(Registration);

module.exports = Registration;
