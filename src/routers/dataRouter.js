const express = require("express");
const router = express.Router();
const { publicData } = require("../controller/data");

router.get("/", publicData);

module.exports = router;
