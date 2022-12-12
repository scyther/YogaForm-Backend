const express = require("express");
const {enrollUser} = require("../controllers/register");

const router = express.Router();

router.post("/new", enrollUser);

module.exports = router;
