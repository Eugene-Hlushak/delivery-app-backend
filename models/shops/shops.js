const { Schema, model } = require("mongoose");

const shopSchema = new Schema(
  {
    name: {
      type: "String",
      required: true,
    },
  },
  { versionKey: false }
);

const Shop = model("shop", shopSchema);

module.exports = Shop;
