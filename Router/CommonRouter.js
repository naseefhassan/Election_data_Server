const express = require("express");
const Router = express.Router();

const { PostSignup,login } = require('../Controller/CommonController');


Router.post("/register", PostSignup);
Router.post("/login", login)

module.exports = Router;
