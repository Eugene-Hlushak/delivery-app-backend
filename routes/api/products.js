const express = require("express");
// const Shop = require("../../models/shops/shops");
const router = express.Router();
const Product = require("../../models/products/products");

router.get("/", async (req, res, next) => {
  const result = await Product.find();
  console.log(result);
  res.json({ result });
});

router.get("/:productId", async (req, res, next) => {
  const result = await Product.findOne();
  res.json({ result });
});

router.post("/", async (req, res, next) => {
  const result = await Product.create(req.body);
  res.json({ result });
});

module.exports = router;
