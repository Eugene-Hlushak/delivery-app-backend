const express = require("express");
const router = express.Router();
const { createUser, getUser } = require("../../services/users/users");

router.post("/register", async (req, res, next) => {
  const result = await createUser(req.body);
  res.json({ result });
});

router.post("/login", async (req, res, next) => {
  const result = await getUser(req.body);
  res.json({ result });
});

module.exports = router;
