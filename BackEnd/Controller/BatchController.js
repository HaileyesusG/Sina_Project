const batch = require("../Models/Batch");

//create batch

const createBatch = async (req, res) => {
  const { batchName } = req.body;

  const exists = await batch.findOne({ batchName });
  if (exists) {
    throw Error("Batch already in use");
  }
  const batches = await batch.create({
    batchName,
  });
  res.status(200).json(batches);
};

const getBatch = async (req, res) => {
  const bathes = await batch.find({});
  res.status(200).json(bathes);
};
module.exports = {
  createBatch,
  getBatch,
};
