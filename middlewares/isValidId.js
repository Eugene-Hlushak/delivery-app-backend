const { isValidObjectId } = require("mongoose");
const { HttpError } = require("../helpers/HttpError");

const isValidId = (req, res, next) => {
  const id = req.params.shopId;
  if (!isValidObjectId(id)) {
    next(HttpError(404));
  }
  next();
};

module.exports = isValidId;
