const express = require("express");
const { guessNumber } = require("../helper/guessNumber");
const checkNumber = require("../helper/checkNumber");
const router = express.Router();

router.post("/guessNum", guessNumber);
router.get("/correctNum",checkNumber);

module.exports = router;
