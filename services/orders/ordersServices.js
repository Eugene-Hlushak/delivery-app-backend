const models = require("../../models");

const getCustomerOrders = async (customer) => await models.Order.find(customer);

const createOrder = async (order) => await models.Order.create(order);

module.exports = { getCustomerOrders, createOrder };
