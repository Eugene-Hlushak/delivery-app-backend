const Shop = require("../../models/shops/shops");

const checkShop = async (req, res, next) => {
  const shopInfo = await Shop.findById(req.params.shopId);
  if (!shopInfo) {
    console.log("No shop");
  }
  req.shop = shopInfo;

  next();
};

const getShops = async () => await Shop.find();

const createShop = async (data) => await Shop.create(data);

const getShopInfo = async (id) => await Shop.findById(id);

module.exports = { getShops, createShop, getShopInfo, checkShop };
