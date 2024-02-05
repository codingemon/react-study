// 2. 삼항 연산자
// let a = 3;
// a >= 0 ? console.log("양수") : console.log("음수"); // 양수

// let a = [];
// a.length === 0 ? console.log("빈배열") : console.log("안 빈 배열"); // 빈배열

// // 값이 참일때와 거짓일 때
// let a = [1, 2];

// const arryStatus = a.length === 0 ? "빈배열" : "안 빈 배열";
// console.log(arryStatus);

// // truthy & falsy
// let a;

// const result = a ? true : false;
// console.log(result); // false

// let a = [];

// const result = a ? true : false;
// console.log(result); //true

// 학점 계산 프로그램
// 중첩 삼항 연산자
// TODO : 학점 계산 프로그램
// 90점 이상 A+
// 50점 이상 B+
// 둘다 아니면 F

let score = 100;

score >= 90
  ? console.log("A+")
  : score >= 50
  ? console.log("B+")
  : console.log("F");

// 가독성은 중첩 if문
// if (score >= 90) {
//   console.log("A+");
// } else if (score >= 50) {
//   console.log("B+");
// } else {
//   console.log("F");
// }
