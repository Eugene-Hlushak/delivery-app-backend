const Shop = require("../../models/shops/shops");

const checkShop = async (req, res) => {
  const shopInfo = await Shop.findById(req.body);
  if (!shopInfo) {
    console.log("No shop");
  }
  req.shop = shopInfo;
  console.log("req.shop", req.shop);
};
