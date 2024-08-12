const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

dotenv.config({
    path: `${__dirname}/config.env`,
});

const DB = mongoose.connect(process.env.DATABASE.replace("<PASSWORD>", process.env.DATABASE_PASSWORD)).then((con) => {
    console.log(`CONNECTED TO ${con.connection.name} DATABASE...`);
});

const PORT = 10000;

app.listen(PORT, () => {
  console.log(`SERVER STARTED ON PORT ${PORT}...`);
});