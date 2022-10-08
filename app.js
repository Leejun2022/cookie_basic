const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());


// GET Method로 http://localhost:5001/set을 호출했을 때, name에 nodejs가 저장된 쿠키를 할당하고
app.get("/set", (req, res) => {
  res.cookie('name', 'nodejs');
  return res.status(200).end();
});


// GET Method로http://localhost:5001/get을 호출했을 때, 쿠키에 등록된 정보들이 반환되는 API를 만들어주세요!
app.get("/get", (req, res) => {
  const cookie = req.cookies;
  return res.status(200).json({ cookie });
});

app.listen(5001, () => {
  console.log("서버가 켜졌어요!");
});