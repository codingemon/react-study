// 비 구조화 할당
// let arr = ["one", "two", "three"];

// let one = arr[0];
// let two = arr[1];
// let three = arr[2];

// console.log(one, two, three);
//위 세개를 한줄로 바꾸자

// 배열의 기본 변수 비 구조화 할당
// let arr = ["one", "two", "three"];
// let [one, two, three] = arr;
// console.log(one, two, three);

// 배열의 선언분리 비 구조화 할당
// let [one, two, three] = ["one", "two", "three"];
// console.log(one, two, three);

// let [one, two, three, four = "four"] = ["one", "two", "three"];
// console.log(one, two, three, four);
// 기본값 할당

// 스왑
// let a = 10;

// let b = 20;

// let tmp = 0;

// tmp = a;
// a = b;
// b = tmp;
// console.log(a, b);

let a = 10;

let b = 20;

[a, b] = [b, a];
console.log(a, b);

let object = { one: "one", two: "two", three: "three" };

let one = object.one;
let two = object.two;
let three = object.three;

console.log(one, two, three);

let object = { one: "one", two: "two", three: "three", name: "피카츄" };

let { one, two, three, name } = object;

console.log(one, two, three, name);
// 순서는 상관없이 Key값을 기준으로 할당한다.

let object = { one: "one", two: "two", three: "three", name: "피카츄" };

let { one, two: twoTwo, three, name: myName, abc = "기본값" } = object;
console.log(one, twoTwo, three, myName, abc);
