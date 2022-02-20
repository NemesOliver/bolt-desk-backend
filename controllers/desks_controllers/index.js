const Desk = require("../../models/Desk");
const { handleErrors } = require("../libs/handleErrors");

// GET ALL DESKS
module.exports.fetch_desks = async (req, res) => {
  try {
    const desks = await Desk.find();

    res.status(200).json(desks);
  } catch (e) {
    res.status(400).json(e.message);
  }
};

// GET SINGLE DESK
module.exports.fetch_desk = async (req, res) => {
  try {
    const desk = await Desk.findById({ _id: req.params.id });

    res.status(200).json(desk);
  } catch (e) {
    res.status(400).json(e);
  }
};

// CREATE NEW DESK
module.exports.create_desk = async (req, res) => {
  try {
    const newDesk = new Desk(req.body);
    const savedDesk = await newDesk.save();

    res.status(201).json(savedDesk);
  } catch (e) {
    const errors = handleErrors(e, { name: "" });
    res.status(400).json({ errors });
  }
};

// UPDATE EXISTING DESK
module.exports.update_desk = async (req, res) => {
  try {
    const desk = await Desk.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(desk);
  } catch (e) {
    const errors = handleErrors(e, { name: "" });
    res.status(400).json({ errors });
  }
};

// DELETE DESK
module.exports.delete_desk = async (req, res) => {
  try {
    const result = await Desk.findByIdAndDelete(req.params.id);

    res.status(202).json(result);
  } catch (e) {
    res.status(400).json(e);
  }
};
