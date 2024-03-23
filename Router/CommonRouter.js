const express = require("express");
const Router = express.Router();

const { PostSignup } = require('../Controller/CommonController');


Router.post("/register", PostSignup);

module.exports = Router;
