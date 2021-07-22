const express = require("express");
const router = express.Router();

const {
  insertScreeningData,
  getScreenings,
  editScreeningData,
  deleteScreeningData,
} = require("../service/screening-service");

router.post("/add", async (req, res) => {
  const data = await insertScreeningData(req.body);
  if (data.success) {
    res.status(201).send(data);
  } else {
    res.status(500).send();
  }
});

router.get("/get/screenings", async (req, res) => {
   
 
  const data = await getScreenings();
  if (data.length > 0) {
    res.send(data);
  } else {
    res.status(404).send();
  }
});
 
router.post("/edit", async (req, res) => {
  const data = await editScreeningData(req.body);
  if (data.success) {
    res.send(data);
  } else {
    res.status(500).send();
  }
});

router.delete("/delete", async (req, res) => {
  const { id } = req.query;
  const data = await deleteScreeningData(id);
  if (data.success) {
    res.status(200).send(data);
  } else {
    res.status(500).send();
  }
});

module.exports = router;
