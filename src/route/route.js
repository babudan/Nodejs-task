const express = require('express')

const router = express.Router()

const { testuser } = require("../Controller/task1");
const { datamani, datamanipulation } = require("../Controller/task2");

router.get("/test", testuser);

router.post("/datamanipulate", datamanipulation);

module.exports = router