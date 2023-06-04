const models = require("../../models");

const getShops = async () => await models.Shop.find();

const getProductsByShop = async (id) => {
  const data = await models.Product.find(id);
  return data;
};

const getShopInfo = async (id) => await models.Shop.findById(id);

const createShop = async (data) => await models.Shop.create(data);

module.exports = {
  getShops,
  createShop,
  getShopInfo,
  getProductsByShop,
};
