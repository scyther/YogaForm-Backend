const Sequelize = require("sequelize");
// console.log(process.env);
const db = new Sequelize(process.env.DATABASE_URL, {
  dialect: "mysql",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: true,
    },
  },
});

module.exports = db;
