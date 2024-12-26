// 实现 string.trim 方法
String.prototype.myTrim = function () {
  return this.replace(/^\s*|\s*$/g, '');
};
const str1 = ' 123123  ';
const str2 = '    1234123';
const str3 = '123412   ';
console.log(str1.myTrim(), str2.myTrim(), str3.myTrim());
console.log(str1.trim(), str2.trim(), str3.trim());
