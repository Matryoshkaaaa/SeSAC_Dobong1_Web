const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// app.get("/", (req, res) => {
//   res.render("index");
// });

app.get("/", (req, res) => {
  res.render("practice");
});

// open api 사용
app.get("/open-api", (req, res) => {
  res.render("api");
});

// ajax 라우팅
app.get("/ajax", (req, res) => {
  console.log(req.query);
  //   res.send({
  // name : req.query.name,
  // gender: req.query.gender
  res.send(req.query);
});

app.post("/ajax", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

// axios
app.get("/axios", function (req, res) {
  console.log(req.query);
  res.send(req.query);
});

app.post("/axios", function (req, res) {
  console.log(req.body);
  res.send(req.body);
});

const id = "asdf";
const password = 1234;

app.post("/axiosLogin", function (req, res) {
  if (req.body.id == id && req.body.password == password) {
    console.log(req.body);
    res.send(req.body);
  } else if (req.body.id !== id || req.body.password !== password) {
    res.send("loginErr");
  }
});

// fetch
app.get("/fetch", function (req, res) {
  console.log(req.query);
  res.send("fetch 응답 완료!");
});

app.post("/fetch", function (req, res) {
  console.log(req.body);
  res.send(req.body);
});
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
