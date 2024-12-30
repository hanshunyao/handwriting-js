// 实现 Lodash.isEmpty 功能
function myRepeat(func, times, wait) {
  return function wrapper(...args) {
    if (times > 0) {
      func(...args);
      setTimeout(wrapper, wait, ...args);
      times--;
    }
  };
}

const repeatFunc = myRepeat(console.log, 3, 2000);
repeatFunc('myRepeat');
