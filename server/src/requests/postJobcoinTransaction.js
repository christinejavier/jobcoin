const express = require("express");
const request = require("request");

const router = express.Router();

router.post("/", (req, res) => {
  const { toAddress, fromAddress, amount } = req.body;
  request.post(
    "https://jobcoin.gemini.com/shank-enviably/api/transactions",
    {
      json: {
        toAddress,
        fromAddress,
        amount,
      },
    },
    (error, response, body) => {
      if (error) {
        return error;
      }

      res.send(body);
    }
  );
});

module.exports = router;
