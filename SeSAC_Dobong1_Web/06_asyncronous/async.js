let product, price;
function goMart() {}

function pickDrink(callback) {
  // 3초동안 고민
  setTimeout(() => {
    console.log("고민 끝~");
    product = "콜라";
    price = 2000;
    callback(); // 인자로 받아온다.
  }, 3000);
}

function pay() {
  console.log(`상품명: ${product}, 가격:${price}`);
}

async function excute() {
  goMart();
  await pickDrink();
  pay();
}
