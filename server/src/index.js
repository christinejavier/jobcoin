const express = require("express");
const cors = require("cors");
const getAddressInfo = require("./requests/getAddressInfo");
const postJobcoinTransaction = require("./requests/postJobcoinTransaction");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/getAddressInfo", getAddressInfo);
app.use("/api/postJobcoinTransaction", postJobcoinTransaction);

app.listen(1234);
