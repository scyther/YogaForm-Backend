require("dotenv").config();

const express = require("express");
const cors = require("cors");
const db = require("./config/database");
const userRoutes = require("./routes/userRoutes");
const registerRoutes = require("./routes/registerRoutes");

const app = express();

db.authenticate()
  .then(() => {
    db.sync({ force: true })
      .then(() => {
        console.log("Tables Synced");
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("Database connected...");
  })
  .catch((error) => {
    console.log(error);
  });

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("HomePage");
});
app.use("/users", userRoutes);
app.use("/enroll", registerRoutes);

app.listen(5000, () => console.log("Server running at port 5000"));
