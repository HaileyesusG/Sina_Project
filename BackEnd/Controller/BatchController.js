const batch = require("../Models/Batch");
const teacher = require("../Models/Teacher");
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

//get batches by teacher id

const getBatchByTeacherId=async(req,res)=>{
  //teacher id
const{id}=req.params;
const response=await teacher.findById(id)
const Batches=response.batchName;
res.status(200).json(Batches);//Batches are Array
}

module.exports = {
  createBatch,
  getBatch,
  getBatchByTeacherId
};
