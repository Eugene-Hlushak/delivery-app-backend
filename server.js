const app = require("./app");
const { mongoose } = require("mongoose");
const { DB_HOST, PORT } = process.env;

mongoose
  .connect(DB_HOST)
  .then(
    console.log("Connection successfull, port", PORT),
    app.listen(PORT, () => {})
  )
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
