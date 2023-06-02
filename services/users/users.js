const User = require("../../models/users/users");

const createUser = async (data) => await User.create(data);

const getUser = async (id) => await User.findOne(id);

module.exports = { createUser, getUser };
