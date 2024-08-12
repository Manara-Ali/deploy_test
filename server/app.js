const express = require("express");
const cors = require("cors");
const productRouter = require("./routes/productRouter");

const app = express();

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use("/api/v1/products", productRouter)

module.exports = app;