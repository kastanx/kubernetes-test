import express from "express";

const app = express();
const port = 9000;
const date = new Date();

app.get("/", (req, res) => {
  console.log("someone came");
  res.send(date);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
