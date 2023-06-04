const express = require("express");
const ctrl = require("../../controllers/shopsController");
const mw = require("../../middlewares");
const router = express.Router();
const Product = require("../../models/products/products");

router.get("/", ctrl.getAllShops);

router.get(
  "/:shopId/products",
  mw.isValidId,
  mw.checkShop,
  ctrl.getShopProducts
);

// -------------------------------------------------------------------//

router.post(
  "/:shopId/products",
  mw.isValidId,
  mw.checkShop,
  async (req, res, next) => {
    const { _id: shop } = req.shop;
    const result = await Product.create({ ...req.body, shop });

    res.json({ result });
  }
);

module.exports = router;
