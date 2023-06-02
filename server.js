const app = require("./app");
const { mongoose } = require("mongoose");
const { DB_HOST } = process.env;

mongoose
  .connect(DB_HOST)
  .then(
    console.log("Connection successfull"),
    app.listen(3000, () => {})
  )
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });