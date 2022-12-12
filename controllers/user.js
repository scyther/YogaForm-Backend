const prisma = require("../config/database");

exports.createUser = (req, res) => {
  const parsedAge = parseInt(req.body.age);
  console.log(parsedAge);
  if (parsedAge < 18 || parsedAge > 65) {
    return res
      .status(400)
      .json({ cError: "Age Must be between 18 to 65 to enroll" });
  }
  prisma.user
    .create({
      data: {
        name: req.body.name,
        age: parsedAge,
      },
    })
    .then((result) => {
      return res.json(result);
    })
    .catch((error) => {
      // if (error.code === "P2002") {
      //   return res.status(400).json({
      //     cError: "User is already There",
      //   });
      // }
      return res.status(400).json({
        cError: "user not created",
        error,
      });
    });
};
