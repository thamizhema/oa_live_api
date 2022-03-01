const express = require("express");
const cors = require("cors");
const axios = require("axios");
const jdoodle = require("jdoodle-api");

const app = express();
app.use(express.json());
app.use(cors());

// API Methods
app.post("/jd", async (req, res) => {
  axios
    .post("https://api.jdoodle.com/v1/execute", req.body)
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      res.send("sorry!, Somthig went wrong");
    });
});

// Run Port
app.listen(4000, () => {
  console.log("App running at 4000 port");
});
