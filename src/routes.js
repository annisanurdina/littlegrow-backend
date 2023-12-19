const express = require('express');
const router = express.Router();
const { addData, getData, getByProfileId, getByUserId, deleteData, updateData } = require('./handler');

router.get("/", getData)
router.post("/profile", addData)
router.get("/profiles/:userId", getByUserId)
router.get("/detail/:profileId", getByProfileId)
router.delete("/delete/:profileID", deleteData)
router.put("/update/:profileId", updateData)

module.exports = router;
