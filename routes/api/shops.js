const express = require("express");
// const { createShop, checkShop } = require("../../services/shops/shops");

const {
  getAllShops,
  getShopProducts,
} = require("../../controllers/shopsController");
const isValidId = require("../../middlewares/isValidId");
const checkShop = require("../../middlewares/checkShop");

const router = express.Router();
const Product = require("../../models/products/products");

router.get("/", getAllShops);

router.get("/:shopId/products", checkShop, getShopProducts);

// -------------------------------------------------------------------//

router.post(
  "/:shopId/products",
  isValidId,
  checkShop,
  async (req, res, next) => {
    const { _id: shop } = req.shop;
    const result = await Product.create({ ...req.body, shop });

    res.json({ result });
  }
);

module.exports = router;
