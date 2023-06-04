const ctrlWrapper = require("../helpers/ctrlWrapper");
const {
  getShops,
  //   getShopInfo,
  getProductsByShop,
} = require("../services/shops/shops");

const getAllShops = async (req, res) => {
  const shops = await getShops();
  res.json(shops);
};

const getShopProducts = async (req, res) => {
  const { _id: shop } = req.shop;
  const data = await getProductsByShop({ shop });
  res.json(data);
};

module.exports = {
  getAllShops: ctrlWrapper(getAllShops),
  getShopProducts: ctrlWrapper(getShopProducts),
};
