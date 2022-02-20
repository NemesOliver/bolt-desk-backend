const Desk = require("../../models/Desk");
const validation = require("./libs/handleErrors");

module.exports.fetch_desks = async (req, res) => {
  try {
    const desks = await Desk.find();

    res.status(200).json(desks);
  } catch (e) {
    res.status(400).json(e.message);
  }
};

module.exports.fetch_desk = async (req, res) => {
  try {
    const desk = await Desk.findById({ _id: req.params.id });

    res.status(200).json(desk);
  } catch (e) {
    res.status(400).json(e);
  }
};

module.exports.create_desk = async (req, res) => {
  try {
    const newDesk = new Desk(req.body);
    const savedDesk = await newDesk.save();

    res.status(201).json(savedDesk);
  } catch (e) {
    const errors = validation.handleErrors(e);
    res.status(400).json({ errors });
  }
};

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
    const errors = validation.handleErrors(e);
    res.status(400).json({ errors });
  }
};

module.exports.delete_desk = async (req, res) => {
  try {
    const result = await Desk.findByIdAndDelete(req.params.id);

    res.status(202).json(result);
  } catch (e) {
    res.status(400).json(e);
  }
};
