// 조건문 업그레이드
function isKoreanFood(food) {
  if (food === "불고기" || food === "떡볶이" || food === "비빔밥") {
    return true;
  }
  return false;
}

const food1 = isKoreanFood("불고기");
const food2 = isKoreanFood("파스타 ");
console.log(food1);
console.log(food2);

// includes
function isKoreanFood(food) {
  if (["불고기", "떡볶이", "비빔밥"].includes(food)) {
    return true;
  }
  return false;
}

const food1 = isKoreanFood("불고기");
const food2 = isKoreanFood("파스타 ");
console.log(food1);
console.log(food2);

//   가로 표기법

const getMeal = (mealType) => {
  if (mealType === "한식") return "불고기";
  if (mealType === "양식") return "파스타";
  if (mealType === "중식") return "멘보샤";
  if (mealType === "일식") return "스시";
  return "굶기";
};

console.log(getMeal("한식"));

const meal = {
  한식: "불고기",
  중식: "멘보샤",
  일식: "스시",
};

const getMeal = (mealType) => {
  return meal[mealType] || "굶기";
};

console.log(getMeal("한식"));
