// 使用 promise 实现
function sleep1(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

// 使用 ES5 实现
function sleep2(callback, time) {
  if (typeof callback === 'function') setTimeout(callback, time);
}

// 调用
sleep1(1000).then(() => {
  console.log(1);
});
function output() {
  console.log(1);
}
sleep2(output, 1000);
