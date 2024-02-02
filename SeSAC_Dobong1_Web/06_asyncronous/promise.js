let product, price;
function goMart() {}

function pickDrink() {
  // 3초동안 고민

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("고민 끝~");
      product = "콜라";
      price = 2000;
    }, 3000);
    resolve("구매완료!!");
    reject("실패");
  });
}

function pay() {
  console.log(`상품명: ${product}, 가격:${price}`);
}

goMart();
pickDrink()
  .then(() => {
    pay();
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("마트에서 나왔어요.");
  });
// pay();
