const express = require("express");
const path = require("path");
const app = express();

app.listen(8080, function () {
  console.log("listening on 8080");
});

// 이거 추가해놔야 ajax 잘됨
app.use(express.json());
var cors = require("cors"); // npm install cors 터미널에도 입력해야함
app.use(cors());

// 'react-project/build' 이거 있어야 특정폴더의 파일들 전송가능
app.use(express.static(path.join(__dirname, "react-project/build")));

app.get("/", function (요청, 응답) {
  응답.sendFile(path.join(__dirname, "/react-project/build/index.html"));
});

app.get("/product", function (요청, 응답) {
  웅답.json({ name: "black shoes" });
});

app.get("*", function (요청, 응답) {
  응답.sendFile(path.join(__dirname, "/react-project/build/index.html"));
});
