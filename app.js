const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const shopsRouter = require("./routes/api/shops");
const productsRouter = require("./routes/api/shops");
const usersRouter = require("./routes/api/users");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/shops", shopsRouter);
app.use("/api/products", productsRouter);
app.use("/api/users", usersRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;