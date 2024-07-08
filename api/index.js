const express = require("express");
const router = require("./Router/router");
const cors = require("cors");
const { urlencoded } = require("body-parser");

const app = express();
app.use(express.json());

const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};

app.use(cors(corsOptions));

app.use(urlencoded({ extended: true }));

app.use(router);

app.listen(4000, () => {
  console.log("====================================");
  console.log("Server is Running");
  console.log("====================================");
});
