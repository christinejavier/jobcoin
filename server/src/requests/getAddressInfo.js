const express = require("express");
const request = require("request");

const router = express.Router();

router.get("/", (req, res) => {
  const { address } = req.query;
  request(
    `https://jobcoin.gemini.com/shank-enviably/api/addresses/${address}`,
    (error, response, body) => {
      if (error) {
        return error;
      }
      res.send(body);
    }
  );
});

module.exports = router;
