const express = require("express");
const app = express();
const port = 3000;

const HT = [];
// console.log(HT.shift());
// console.log(HT.shift());
// console.log(HT.shift());
// console.log(HT.shift());
// HT.push(5);
// console.log(HT.shift());

// console.log(HT.length);

app.get("/:country", (req, res) => {
  if (req.params.country == "HT" && HT.length > 0) {
    res.send(`${HT.shift()}`);
  } else {
    res.send("wait");
  }
});

app.get("/:country/:number", (req, res) => {
  if (req.params.country == "HT") {
    HT.push(req.params.number);
    res.send(`${req.params.number}--added to HT`);
  } else {
    res.send("Network error");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
