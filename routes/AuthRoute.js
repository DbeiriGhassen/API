const express = require("express");
const router = express. Router();
const {
 registerController
} = require("../Controllers/AuthController"); 
router.post("/register", registerController);
module.exports = router;