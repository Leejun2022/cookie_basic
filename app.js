const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());


// key == name, value == nodejs 인 쿠키를 보내시오
app.get("/set", (req, res) => {
  res.cookie('name', 'nodejs');
  return res.status(200).end();
});


// key == name, value == nodejs 인 쿠키를 받으시오
app.get("/get", (req, res) => {
  const cookie = req.cookies;
  return res.status(200).json({ cookie });
});

app.listen(5001, () => {
  console.log("서버가 켜졌어요!");
});