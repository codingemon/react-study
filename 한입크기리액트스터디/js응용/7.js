// - 동기 & 비동기

// 동기적 방식
function taskA() {
  console.log("a 작업 끝"); // a 작업 끝
}

taskA();
console.log("코드 끝"); // 코드 끝

// 비동기로 변환
function taskA() {
  setTimeout(() => {
    console.log("A TASK END");
  }, 2000);
}

taskA();
console.log("코드 끝");

// 3, 4 더하기도
function taskA(a, b, cb) {
  setTimeout(() => {
    const res = a + b;
    cb(res);
  }, 3000);
}

taskA(3, 4, (res) => {
  console.log("A TASK RESULT : ", res);
});
console.log("코드 끝");

// TaskB
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

taskA(3, 4, (res) => {
  console.log("A TASK RESULT : ", res);
});

taskB(7, (res) => {
  console.log("B TASK RESULT : ", res);
});

console.log("코드 끝");

// TaskC
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

taskA(3, 4, (res) => {
  console.log("A TASK RESULT : ", res);
});

taskB(7, (res) => {
  console.log("B TASK RESULT : ", res);
});

taskC(14, (res) => {
  console.log("C TASK RESULT : ", res);
});

console.log("코드 끝");

// 콜백콜백콜백 지옥~
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

taskA(4, 5, (a_res) => {
  console.log("A RESULT: ", a_res);
  taskB(a_res, (b_res) => {
    console.log("B RESULT : ", b_res);
    taskC(b_res, (c_res) => {
      console.log("C RESULT : ", c_res);
    });
  });
});

console.log("코드 끝");
