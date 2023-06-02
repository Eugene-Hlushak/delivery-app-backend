const Shop = require("../../models/shops/shops");

const getShops = async () => await Shop.find();

const createShop = async (data) => await Shop.create(data);

module.exports = { getShops, createShop };
