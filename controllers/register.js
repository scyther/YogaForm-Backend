const prisma = require("../config/database");

exports.enrollUser = (req, res) => {
  const { month, slot, userId, paymentId } = req.body;
  prisma.registration
    .create({
      data: {
        month: month,
        slot: slot,
        paymentId: paymentId,
        user: {
          connect: {
            id: userId,
          },
        },
      },
      include: {
        user: true,
      },
    })
    .then((result) => {
      return res.json(result);
    })
    .catch((error) => {
      console.log(error);
      return res.status(400).json({
        cError: "Registration Failed",
        error,
      });
    });
};

exports.completePayment = (req, res, next) => {
  const { paymentId } = req.body;
  if (!paymentId) {
    return res.status(400).json({ error: "Payment Failed" });
  }
  next();
};
