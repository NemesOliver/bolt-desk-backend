const express = require("express");
const {
  create_user,
  get_user,
  get_users,
  update_user,
  delete_user,
} = require("../../controllers/user_controllers");
const router = express.Router();

router.get("/", get_users);
router.get("/:id", get_user);
router.post("/create", create_user);
router.patch("/update/:id", update_user);
router.delete("/delete/:id", delete_user);

module.exports = router;
