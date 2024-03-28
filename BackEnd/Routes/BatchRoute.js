const { createBatch, getBatch } = require("../Controller/BatchController");

const express = require("express");
const router = express.Router();
//router.route("/:id").get(GetApplicant);
router.route("/createBatch").post(createBatch);
router.route("/getBatch").post(getBatch);

module.exports = router;
