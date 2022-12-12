const express = require("express");
const { enrollUser, completePayment } = require("../controllers/register");

const router = express.Router();

router.post("/new", completePayment, enrollUser);

module.exports = router;
