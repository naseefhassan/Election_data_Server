const UserSchema = require("../Model/UserData");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { sendMail } = require("../Utility/NodeMailer");

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
        const token = jwt.sign({ payload }, process.env.SECRET_KEY, {
          expiresIn: expires,
        });
        res.status(200).json({ message: "data added successfully", token });
        // sendMail(email,name)
      } else {
        res
          .status(400)
          .json({ message: "User already exists with this email." });
      }
    } catch (error) {
      console.error(error);
    }
  },
  login: async (req, res) => {
    try {
      const { email } = req.body;
      const check = await UserSchema.findOne({ email });
      const payload = req.body;

      const expires = 3 * 24 * 60 * 60;
      const token = jwt.sign({ payload }, process.env.SECRET_KEY, {
        expiresIn: expires,
      });

      const passwordMatch = await bcrypt.compare(
        req.body.password,
        check.password
      );
      if (passwordMatch) {
        res.status(200).json({ message: "login successful", token });
      } else {
        res.status(401).json({ message: "login invaild " });
      }
    } catch (error) {
      console.error("login error", error);
      res.status(500).json({ message: "login error" });
    }
  },
  verifyOTP: async (req, res) => {
    try {
    } catch (error) {}
  },
};

module.exports = object;
