const Shop = require("../models/shops/shops");
const { HttpError } = require("../helpers/HttpError");

const checkShop = async (req, res, next) => {
  console.log(req.params.shopId);
  const shopInfo = await Shop.findById(req.params.shopId);
  if (!shopInfo) {
    throw HttpError(404);
  }
  req.shop = shopInfo;

  next();
};

module.exports = checkShop;
