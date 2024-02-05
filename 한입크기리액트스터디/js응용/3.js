// 3. 단락 회로 평가

// const getName = (person) => {
//   if (!person) {
//     return "객체가 아닙니다.";
//   }
//   return person.name;
// };

// let person;
// const name = getName(person);
// console.log(name);

// const getName = (person) => {
//     return person && person.name;
//   };

//   let person;
//   const name = getName(person);
//   console.log(name); // undefined

const getName = (person) => {
  const name = person && person.name; // 피카츄 저장
  return name || "객체가 아닙니다.";
};

let person = { name: "피카츄" };
const name = getName(person);
console.log(name);
