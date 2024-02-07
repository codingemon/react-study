// 6. spread 연산자
// const cookie = {
//     base: "cookie",
//     madeIn: "korea"
//   };

//   const chocochipCookie = {
//     base: "cookie",
//     madeIn: "korean",
//     toping: "cocochip"
//   };

//   const blueberryCookie = {
//     base: "cookie",
//     madeIn: "korea",
//     toping: "blueberry"
//   };

//   const strawberryCookie = {
//     base: "cookie",
//     madeIn: "korea",
//     toping: "strawberry"
//   };
//
const cookie = {
  base: "cookie",
  madeIn: "korea",
};

const chocochipCookie = {
  ...cookie,
  toping: "cocochip",
};

const blueberryCookie = {
  ...cookie,
  toping: "blueberry",
};

const strawberryCookie = {
  ...cookie,
  toping: "strawberry",
};

console.log(chocochipCookie);

// 배열에서 사용
const noTopingCookies = ["촉촉한쿠기", "안촉촉한쿠키"];
const topingCookies = ["바나나", "초코", "아무거나"];

const allCookies = [...noTopingCookies, ...topingCookies];

console.log(allCookies);
