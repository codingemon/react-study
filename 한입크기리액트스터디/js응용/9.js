// async & await 직좐적인 비 동기 처리 코드 작성하기

// async
function hello() {
  return "hello";
}

async function helloAsync() {
  return "hello Async";
}

helloAsync().then((res) => {
  console.log(res);
});

// await
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve(), ms);
  });
}

// async function helloAsync() {
//   return delay(3000).then(() => {
//     return "hello Async";
//   });
// }

async function helloAsync() {
  await delay(3000);
  return "hello async";
}

helloAsync().then((res) => {
  console.log(res);
});

// 다시 써보기
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve(), ms);
  });
}

async function helloAsync() {
  await delay(3000);
  return "hello async";
}

async function main() {
  const res = await helloAsync();
  console.log(res);
}

main();
