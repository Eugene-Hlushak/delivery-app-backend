const { Schema, model } = require("mongoose");
const productSchema = new Schema({
  name: "String",
  price: "Number",
  quantity: "Number",
  shop: "String",
  _id: "String",
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
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  {
    versionKey: false,
  }
);

const Order = model("order", orderSchema);

module.exports = Order;
