const Registration = require("../models/registrationModel");

exports.enrollUser = (req, res) => {
  Registration.create({ month: req.body.name, slot: req.body.slot })
    .then((result) => {
      return res.json(result);
    })
    .catch((error) => {
      return res.status(400).json({
        cError: "Registration Failed",
        error,
      });
    });
};
