const UserSchema = require("../Model/UserData");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');


const object = {
  PostSignup: async (req, res) => {
    try {
      const {
        name,
        email,
        password,
        phoneNumber,
        dateOfBirth,
        assembly,
        constituency,
        district,
        panchayath,
        municipality,
        corporation,
      } = req.body;
      const payload = req.body;

      const existingUser = await UserSchema.findOne({ email: email });

      if (!existingUser) {
        const saltRounds = 10;
        const hashPassword = await bcrypt.hash(password, saltRounds);

        const newUser = await new UserSchema({
          name: name,
          email: email,
          password: hashPassword,
          phoneNumber: phoneNumber,
          dateOfBirth: dateOfBirth,
          assembly: assembly,
          constituency: constituency,
          district: district,
          panchayath: panchayath,
          municipality: municipality,
          corporation: corporation,
        }).save();

         // gernerating token
         const expires = 3 * 24 * 60 * 60;
         const token = jwt.sign({payload},
             process.env.SECRET_KEY, {expiresIn: expires},
         );
        res.status(200).json({ message: "data added successfully",token });
      } else {
        res
          .status(400)
          .json({ message: "User already exists with this email." });
      }
    } catch (error) {
      console.error(error);
    }
  },
};

module.exports = object;
