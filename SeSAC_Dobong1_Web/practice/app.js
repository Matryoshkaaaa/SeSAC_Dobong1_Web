const express = require("express");
const app = express();
const PORT = 8080;

app.set("views", "./views");
app.set("view engine", "ejs");

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

// multer
const multer = require("multer");
const upload = multer({
  dest: "uploads/", // uploads 폴더가 자동생성된다.
});

const upload2 = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/"); // uploads 폴더가 자동생성 되지 않는다.
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fieldSiz: 5 * 1024 * 1024 },
});

// body-parser 미들웨어
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/uploads", express.static(__dirname + "/uploads"));
// app.use("/static", express.static(__dirname + "/public"));
// app.use("/static", express.static(__dirname + "/static"));

app.post("/upload", upload.single("userfile"), (req, res) => {
  console.log(req.file);
  console.log(req.body);
  res.render("result.ejs", {
    userInfo: req.body,
    imgsrc: req.file.path,
  });
});

app.get("/", (req, res) => {
  res.render("index");
});
