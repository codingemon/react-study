// -Promise - 콜백 지옥에서 탈출하기

function isPositive(number, resolve, reject) {
  setTimeout(() => {
    if (typeof number === "number") {
      // 성공 -> resolve
      resolve(number >= 0 ? "양수" : "음수");
    } else {
      // 실패 -> reject
      reject("주어진 값이 숫자형 값이 아닙니다.");
    }
  }, 2000);
}

isPositive(
  10,
  (res) => {
    console.log("성공적으로 수행됨 :", res);
  },
  (err) => {
    console.log("실패 :", err);
  }
);

// promise
function isPositiveP(number) {
  const executor = (resolve, reject) => {
    // 실행자
    setTimeout(() => {
      if (typeof number === "number") {
        // 성공 -> resolve
        console.log(number);
        resolve(number >= 0 ? "양수" : "음수");
      } else {
        // 실패 -> reject
        reject("주어진 값이 숫자형 값이 아닙니다.");
      }
    }, 2000);
  };
  const asyncTask = new Promise(executor);
  return asyncTask;
}

const res = isPositiveP(10);

res
  .then((res) => {
    console.log("작업 성공:", res);
  })
  .catch((err) => {
    console.log("작업 실패 :", err);
  });

// 콜백지옥 체험
function taskA(a, b, cb) {
  setTimeout(() => {
    const res = a + b;
    cb(res);
  }, 3000);
}

function taskB(a, cb) {
  setTimeout(() => {
    const res = a * 2;
    cb(res);
  }, 1000);
}

function taskC(a, cb) {
  setTimeout(() => {
    const res = a * -1;
    cb(res);
  }, 2000);
}

taskA(3, 4, (a_res) => {
  console.log("task A : ", a_res);
  taskB(a_res, (b_res) => {
    console.log("task B : ", b_res);
    taskC(b_res, (c_res) => {
      console.log("task C : ", c_res);
    });
  });
});

// promise
function taskA(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a + b;
      resolve(res);
    }, 3000);
  });
}

function taskB(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a * 2;
      resolve(res);
    }, 1000);
  });
}

function taskC(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a * -1;
      resolve(res);
    }, 2000);
  });
}

// 콜백 또 발생하나?
//   taskA(5, 1).then((a_res) => {
//     console.log("A RESULT : ", a_res);
//     taskB(a_res).then((b_res) => {
//       console.log("B RESULT : ", b_res);
//       taskC(b_res).then((c_res) => {
//         console.log("C RESULT : ", c_res);
//       });
//     });
//   });

// then 체이닝 이용
taskA(5, 1)
  .then((a_res) => {
    console.log("A RESULT : ", a_res);
    return taskB(a_res);
  })
  .then((b_res) => {
    console.log("B RESULT : ", b_res);
    return taskC(b_res);
  })
  .then((c_res) => {
    console.log("C RESULT : ", c_res);
  });

// 이 처럼 사용가능
const bPromiseResult = taskA(5, 1).then((a_res) => {
  console.log("A RESULT : ", a_res);
  return taskB(a_res);
});
console.log("확인중");
console.log("확인중");
console.log("확인중");
console.log("확인중");

bPromiseResult
  .then((b_res) => {
    console.log("B RESULT : ", b_res);
    return taskC(b_res);
  })
  .then((c_res) => {
    console.log("C RESULT : ", c_res);
  });
