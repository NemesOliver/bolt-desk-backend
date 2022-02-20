const express = require("express");
const { create_user } = require("../../controllers/user_controllers");
const router = express.Router();

router.post("/create", create_user);
// router.post();
// router.post();
// router.post();
// router.post();

module.exports = router;
