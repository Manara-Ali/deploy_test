const express = require("express");
const cors = require("cors");
const path = require("path");
const productRouter = require("./routes/productRouter");

const app = express();

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use("/api/v1/products", productRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(path.resolve(), "/client/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(path.resolve(), "client", "dist", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API is running...");
  });
}

module.exports = app;