const object = {
  PostSignup: async (req, res) => {
    try {
      const { name, email, password, phoneNumber, date_of_birth, assembly, constituency, district, panchayath, municipality, corporation
      } = req.body;
      console.log(req.body);
    } catch (error) {
      console.error(error);
    }
  },
};

module.exports = object;
