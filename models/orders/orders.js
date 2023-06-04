const { Schema, model } = require("mongoose");
const productSchema = new Schema({
  name: "String",
  price: "Number",
  quantity: "Number",
  shop: {
    type: Schema.Types.ObjectId,
    ref: "shop",
  },
  _id: {
    type: Schema.Types.ObjectId,
    ref: "product",
  },
});

const orderSchema = new Schema(
  {
    customer: {
      type: "Object",
      required: true,
    },
    order: {
      type: [productSchema],
      required: true,
    },
    totalPrice: {
      type: "Number",
      required: true,
    },
    user: {
      type: "String",
    },
  },
  {
    versionKey: false,
  }
);

const Order = model("order", orderSchema);

module.exports = Order;
