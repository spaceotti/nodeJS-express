const express = require("express");
const route = express.Router();
const authConroller = require("../controllers/authController");

route.post("/", authConroller.handleLogin);

module.exports = route;
