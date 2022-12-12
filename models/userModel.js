const Sequelize = require("sequelize");
const db = require("../config/database");

const { DataTypes } = Sequelize;

const User = db.define(
  "User",
  {
    user_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true, // Or DataTypes.UUIDV1
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    age: {
      type: DataTypes.INTEGER,
    },
  },
);

module.exports = User;
