require("dotenv").config();
const express = require("express");
const port = process.env.DEV_PORT || 4000;
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>hit /bfhl endpoint with a post request</h1>");
});

app.post("/bfhl", (req, res) => {
  const array = req.body.data;
  const responseObj = {
    is_success: true,
    user_id: "avijit_rana_13122002",
    email: "avijit@gmail.com",
    roll_number: 20119811126,
    numbers: [],
    alphabets: [],
  };
  array.forEach((item) => {
    let num = parseInt(item);
    if (num) responseObj.numbers.push(num);
    else responseObj.alphabets.push(item);
  });
  res.json(responseObj);
});

app.listen(port, (err) => {
  const starterText = err
    ? `Error in starting server`
    : `Server started at port http://localhost:${port}/`;
  console.log(starterText);
});
