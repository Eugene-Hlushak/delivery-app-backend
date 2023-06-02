const express = require("express");

const router = express.Router();
const Shop = require("../../models/shops/shops");

router.get("/", async (req, res, next) => {
  const result = await Shop.find();
  res.json({ result });
});

router.post("/", async (req, res, next) => {
  const result = await Shop.create(req.body);
  res.json({ result });
});

router.get("/:shopId", async (req, res, next) => {
  res.json({ message: "template message" });
});

module.exports = router;
