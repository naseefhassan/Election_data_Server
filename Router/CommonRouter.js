const express = require("express");
const Router = express.Router();

const { PostSignup,login, verifyOTP } = require('../Controller/CommonController');


Router.post("/register", PostSignup);
Router.post("/login", login)
Router.post('verifyOTP', verifyOTP )

module.exports = Router;
