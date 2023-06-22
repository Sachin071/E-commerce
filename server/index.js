const express = require("express");
require("colors");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 8080;
const connectDb = require("./config/config");

// dotenv config
dotenv.config();

// Create express object
const app = express();

// Connecting to mongodb database
connectDb();

// All Routes File import here
const productRouter = require("./controller/productController");

// All routes file use here
app.use(productRouter);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`.inverse.bgCyan.white.bold);
});
