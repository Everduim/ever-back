const express = require("express");
const router = express.Router();

const { createUser, authenticate, logout, getUsers } = require("../controllers/users.controller");

const { isAuth } = require("../../midddleware/auth.middleware.js")

router.post("/register", createUser);
router.post("/authenticate", authenticate);
router.post("/logout", [isAuth], logout);
router.get("/", getUsers);

module.exports = router;