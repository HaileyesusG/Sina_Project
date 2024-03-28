const {
  createResource,
  getResource,
  deleteResource,
} = require("../Controller/ResourceController");

const multer = require("multer");

const Storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.originalname);
  },
});
const upload = multer({
  storage: Storage,
}).single("testImage");

const express = require("express");
const router = express.Router();
//router.route("/:id").get(GetApplicant);
router.route("/createResource").post(upload, createResource);
router.route("/getResource").post(getResource);
router.route("/:id").delete(deleteResource);

module.exports = router;
