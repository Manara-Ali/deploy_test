const express = require("express");
const cors = require("cors");
const productRouter = require("./routes/productRouter");

const app = express();

app.use(cors());

app.use("/api/v1/products", productRouter)

module.exports = app;