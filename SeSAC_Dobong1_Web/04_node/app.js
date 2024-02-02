const http = require("http");
const fs = require("fs");
const PORT = 8080;
const server = http.createServer(function (request, response) {
  console.log(request.url);
  const data = fs.readFileSync("./index.html");
  response.writeHead(200, { "content-type": "text/html; charset=utf-8" });
  // response.writeHead(상태코드, 헤더정보)
  //  -text/html: 응답의 콘텐트 형식이 HTML 이라는 의미
  //  -인코딩 방식이 utf-8

  // response.write('응답완료!');
  // response.end('<h3>진짜 완료</h3>')

  response.write(data);
  response.end();
});

server.listen(PORT, function () {
  console.log("server is open!!");
  console.log(`http://localhost:${PORT}`);
});

// 1. request 이벤트: 클라이언트 요청
server.on("request", function (req, res) {
  console.log("request 이벤트 실행!");
});

// 2. connection 이벤트 : 클라이언트 접속했을 때 발생
server.on("connection", function (req, res) {
  console.log("connection 이벤트 실행!");
});

// 예외처리 try ~ catch(err){}문

try {
  const data = fs.readFileSync("./index.html");
  response.writeHead(200, { "content-type": "text/html; charset=utf-8" });
  // response.writeHead(상태코드, 헤더정보)
  //  -text/html: 응답의 콘텐트 형식이 HTML 이라는 의미
  //  -인코딩 방식이 utf-8

  // response.write('응답완료!');
  // response.end('<h3>진짜 완료</h3>')

  response.write(data);
  response.end();
} catch (error) {
  console.log(error);
  const errorPage = fs.readFileSync("./404.html");
  response.writeHead(200, { "content-type": "text/html; charset=utf-8" });
  response.write(errorPage);
  response.end();
} finally {
  // 예외 발생과 상관없이 모두 실행시키고 싶은 경우 작성
  console.log("성공 실패 모두 실행됩니다.");
}
