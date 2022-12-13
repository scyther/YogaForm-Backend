require("dotenv").config();
const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const registerRoutes = require("./routes/registerRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("HomePage");
});
app.use("/users", userRoutes);
app.use("/enroll", registerRoutes);

app.listen(process.env.PORT, () => console.log(`Server running at port ${process.env.PORT} `));
