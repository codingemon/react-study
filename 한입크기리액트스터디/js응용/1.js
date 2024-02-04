// 1. Truthy & Falsy

// let a = "";
// if (a) {
//   console.log("TRUE");
// } else {
//   console.log("FALSE");
// }

// // FALSE

// let a = "string";
// if (a) {
//   console.log("TRUE");
// } else {
//   console.log("FALSE");
// }

// // TRUE

// js 조건식은 블리언값을 넣지않아도 참이나 거짓으로 인식이 되는 특성이 있다.

// -Truthy
// if (true)
// if ({})
// if ([])
// if (42)
// if ("0")
// if ("false")
// if (new Date())
// if (-42)
// if (12n)
// if (3.14)
// if (-3.14)
// if (Infinity)
// if (-Infinity)

// -Falsy
// if (false) {
//     // 도달할 수 없습니다.
//   }

//   if (null) {
//     // 도달할 수 없습니다.
//   }

//   if (undefined) {
//     // 도달할 수 없습니다.
//   }

//   if (0) {
//     // 도달할 수 없습니다.
//   }

//   if (-0) {
//     // 도달할 수 없습니다.
//   }

//   if (0n) {
//     // 도달할 수 없습니다.
//   }

//   if (NaN) {
//     // 도달할 수 없습니다.
//   }

//   if ("") {
//     // 도달할 수 없습니다.
//   }

// undefined 으로는 접근할 수 없음
// const getName = (person) => {
//     return person.name;
//   };

//   let person = { name: "최성형" };
//   const name = getName(person);
//   console.log(name); // 최성형

// - falsy 속성을 이용해보자
// - 위보다 더욱 편하게 사용가능
const getName = (person) => {
  if (!person) {
    // false NOT => True
    return "객체가 아니라구요";
  }
  return person.name;
};

let person = null;
const name = getName(person);
console.log(name);
