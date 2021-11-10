const express = require("express");
const router = express.Router();

const { login, dashboard } = require("../controllers/main.js");
const authenticationMiddleware = require("../middleware/auth.js");

router.route("/dashboard").get(authenticationMiddleware, dashboard);
router.route("/login").post(login);

module.exports = router;
