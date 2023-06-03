const express = require("express");

const router = express.Router();
const Order = require("../../models/orders/orders");

router.get("/", async (req, res, next) => {
  const order = await Order.find();
  res.json({ order });
});

router.post("/", async (req, res, next) => {
  console.log(req.body);
  const order = await Order.create(req.body);
  res.json(order);
});

module.exports = router;
