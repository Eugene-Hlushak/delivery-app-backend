const Shop = require("../../models/shops/shops");
const HttpError = require("../../helpers/HttpError");
const Product = require("../../models/products/products");

const checkShop = async (req, res, next) => {
  const shopInfo = await Shop.findById(req.params.shopId);
  if (!shopInfo) {
    throw HttpError(404);
  }
  req.shop = shopInfo;

  next();
};

const getShops = async () => await Shop.find();

const getProductsByShop = async (id) => {
  console.log("hello");
  const data = await Product.find(id);
  return data;
};

const getShopInfo = async (id) => await Shop.findById(id);

const createShop = async (data) => await Shop.create(data);

module.exports = {
  getShops,
  createShop,
  getShopInfo,
  checkShop,
  getProductsByShop,
};
