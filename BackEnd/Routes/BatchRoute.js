const {
  createBatch,
  getBatch,
  getBatchByTeacherId,
} = require("../Controller/BatchController");

const express = require("express");
const router = express.Router();
router.route("/getBatchByTeacherId/:id").get(getBatchByTeacherId);
router.route("/createBatch").post(createBatch);
router.route("/getBatch").post(getBatch);

module.exports = router;
