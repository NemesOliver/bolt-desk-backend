const express = require("express");
const deskController = require("../../controllers/desks_controllers");

const router = express.Router();

// GET
// Fetch all desks
router.get("/", deskController.fetch_desks);

// GET
// Fetch single desk
router.get("/:id", deskController.fetch_desk);

// POST
// Create new desk
router.post("/create", deskController.create_desk);

// PATCH
// Update desk
router.patch("/update/:id", deskController.update_desk);

// DELETE
// Delete desk
router.delete("/delete/:id", deskController.delete_desk);

module.exports = router;
