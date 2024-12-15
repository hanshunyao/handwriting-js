// 实现 Lodash.clamp 方法
function myClamp1(number, lower, upper) {
  if (number < lower) {
    return lower;
  } else if (number > upper) {
    return upper;
  } else {
    return number;
  }
}

function myClamp2(number, lower, upper) {
  return Math.min(upper, Math.max(lower, number));
}

console.log(
  myClamp1(-10, -5, 5),
  myClamp1(10, -5, 5),
  myClamp2(-10, -5, 5),
  myClamp2(10, -5, 5)
);
