function call(name) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log(name);
      resolve(name);
    }, 1000);
  });
}

function back(cb) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("back");
      resolve("back");
    }, 1000);
  });
}

function hell(cb) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve("callback hell");
    }, 1000);
  });
}

// call -> back -> hell 순서로 실행

async function execute() {
  let name = await call("kim");
  console.log(name + "반가워");
  let txt = await back();
  console.log(txt + "을 실행했구나");
  let msg = await hell();
  console.log("여기는 " + msg);
}
execute();

// async function exec() {
//   await call("kim");
//   await back();
//   await hell("callback hell");
// }
// exec();

// call("kim")
//   .then((name) => {
//     console.log(name + "반가워");
//     return back();
//   })
//   .then((txt) => {
//     console.log(txt + "을 실행했구나");
//     return hell();
//   })
//   .then((message) => {
//     console.log("여기는 " + message);
//   })
//   .catch(() => {
//     console.error("err:", err);
//   });

// call("kim", function (name) {
//     console.log(name + "반가워");
//     back(function (txt) {
//       console.log(txt + "을 실행했구나");
//       hell(function (message) {
//         console.log("여기는 " + message);
//       });
//     });
//   });
