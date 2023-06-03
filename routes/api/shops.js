const express = require("express");
const {
  getShops,
  createShop,
  checkShop,
} = require("../../services/shops/shops");

const router = express.Router();
const Product = require("../../models/products/products");

router.get("/", async (req, res, next) => {
  const data = await getShops();
  res.json(data);
});

router.post("/", async (req, res, next) => {
  const data = await createShop(req.body);
  res.json({ data });
});

router.get("/:shopId/products", checkShop, async (req, res, next) => {
  const { _id: shop } = req.shop;
  const data = await Product.find({ shop });
  res.json(data);
});

// -------------------------------------------------------------------//

router.post("/:shopId/products", checkShop, async (req, res, next) => {
  const { _id: shop } = req.shop;
  const result = await Product.create({ ...req.body, shop });

  res.json({ result });
});

router.post("/", async (req, res, next) => {
  const data = await createShop(req.body);
  res.json({ data });
});

module.exports = router;
