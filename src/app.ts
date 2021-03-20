import express from "express";

const app = express();
const port = 9000;
const date = new Date();
let counter = 0;

app.get("/", (req, res) => {
  counter += 1;
  res.send(counter.toString());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
