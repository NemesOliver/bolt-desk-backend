const express = require("express");
const mongoose = require("mongoose");
const Desk = require("../models/Desk");

const router = express.Router();

// GET
// Fetch all desks
router.get("/", async (req, res) => {
  try {
    const desks = await Desk.find();

    res.json(desks);
  } catch (e) {
    res.json({ error: "Couldn't find desks" });
  }
});

// GET
// Fetch single desk
router.get("/:id", async (req, res) => {
  try {
    const desk = await Desk.findById({ _id: req.params.id });

    res.json(desk);
  } catch (e) {
    res.json(e);
  }
});

// POST
// Create new desk
router.post("/create", async (req, res) => {
  try {
    const newDesk = new Desk(req.body);
    const savedDesk = await newDesk.save();

    res.json(savedDesk);
  } catch (e) {
    res.json(e);
  }
});

// PATCH
// Update desk
router.patch("/update/:id", async (req, res) => {
  try {
    const desk = await Desk.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.json(desk);
  } catch (e) {
    res.json(e);
  }
});

// DELETE
// Delete desk
router.delete("/delete/:id", async (req, res) => {
  try {
    const result = await Desk.findByIdAndDelete(req.params.id);

    res.json(result);
  } catch (e) {
    res.json(e);
  }
});

module.exports = router;
