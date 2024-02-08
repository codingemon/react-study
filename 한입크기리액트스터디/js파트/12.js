// 2. 12. 배열

// forEach
// const arr = [1, 2, 3, 4];
// arr.forEach((elm) => console.log(elm));
// 순회할 수 있게 만들어주는 내장함수(메소드)

//밑 코드에서 map을 사용하면?
// const arr = [1, 2, 3, 4];
// const newArr = [];
// arr.forEach((elm) => {
//   newArr.push(elm * 2);
// });
// console.log(newArr);

// // map
// const arr = [1, 2, 3, 4];
// const newArr = arr.map((elm) => {
//   return elm * 2;
// });

console.log(newArr);
// 원본 배열에 모든 요소를 순회하면 어떤 연산을 해서 return 값을 따로 배열로 추려내서 반환을 할 수 있게 해주는 함수

// // includes
// const arr = [1, 2, 3, 4];

// let number = 3;

// arr.forEach((elm) => {
//   if (elm === number) {
//     console.log(true);
//   }
// });

const arr = [1, 2, 3, 4];

let number = 3;

console.log(arr.includes(number));
// 주어진 배열에서 인자로 받은 값이 존재하는지 boolean 값으로 나타내준다.

// indexOf
const arr = [1, 2, 3, 4];

let number = 3;

console.log(arr.indexOf(number)); // 2
// 주어진 값에 위치를 인덱스로 나타내줌.

// findIndex()
const arr = [
  { color: "red" },
  { color: "black" },
  { color: "blue" },
  { color: "green" },
];
let number = 3;
console.log(arr.findIndex((elm) => elm.color === "green"));
// 3
console.log(
  arr.findIndex((elm) => {
    return elm.color === "green";
  })
);

// find
// const arr = [
//     { color: "red" },
//     { color: "black" },
//     { color: "blue" },
//     { color: "green" }
//   ];

//   let number = 3;

//   let idx = arr.findIndex((elm) => {
//     return elm.color === "blue";
//   });

//   console.log(arr[idx]);
const arr = [
  { color: "red" },
  { color: "black" },
  { color: "blue" },
  { color: "green" },
];

let number = 3;

let element = arr.find((elm) => {
  return elm.color === "blue";
});

console.log(element);
//find 만족하는 요소 자체를 반환해준다.

// filter()
const arr = [
  { num: 1, color: "red" },
  { num: 2, color: "black" },
  { num: 3, color: "blue" },
  { num: 4, color: "green" },
  { num: 5, color: "몰라" },
];

console.log(arr.filter((elm) => elm.color === "blue"));

// - slice()
//     - 배열을 자름
const arr = [
  { num: 1, color: "red" },
  { num: 2, color: "black" },
  { num: 3, color: "blue" },
  { num: 4, color: "green" },
  { num: 5, color: "몰라" },
];

console.log(arr.slice(0, 2));

// (2) [Object, Object]
// 0: Object
// 1: Object

//   - concat
//     - 배열을 합침
const arr1 = [
  { num: 1, color: "red" },
  { num: 2, color: "black" },
  { num: 3, color: "blue" },
];

const arr2 = [
  { num: 4, color: "green" },
  { num: 5, color: "몰라" },
];

console.log(arr1.concat(arr2));

//   - sort()
// - 배열 정렬
let chars = ["나", "가", "다"];

chars.sort();

console.log(chars); // ["가", "나", "다"]

// 숫자
// let numbers = [0, 1, 2, 4, 6, 10, 50, 20];

// numbers.sort();

// console.log(numbers); // x

let numbers = [0, 1, 2, 4, 6, 10, 50, 20];

const compare = (a, b) => {
  // 1. 같다
  // 2. 크다
  // 3. 작다

  if (a > b) {
    //크다
    return 1;
  }
  if (a < b) {
    // 작다
    return -1;
  }
  // 같다
  return 0;
};

numbers.sort(compare);

console.log(numbers); // 순서대로 출력

// - join()
//     - 문자열 하나로 합쳐서 사용할 수 있게 해줌
const arr = ["최성형", "님", "안녕하세요", "또 오셨군요"];

console.log(arr.join(" "));
