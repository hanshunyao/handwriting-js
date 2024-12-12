function myNew(func, ...args) {
  // 步骤 1：创建一个空的简单 JavaScript 对象，即 { } ;
  // 步骤 2：链接该对象到另一个对象（即设置该对象的原型对象）；
  let obj = Object.create(func.prototype);
  // 步骤 3：将步骤 1 新创建的对象作为 this 的上下文；
  let result = func.apply(obj, args);
  // 步骤 4：如果该函数没有返回对象，则返回 this。
  if (
    (typeof result === 'object' && result !== null) ||
    typeof result === 'function'
  ) {
    return result;
  } else {
    return obj;
  }
}

// 调用
let Person = function (name, sex) {
  this.name = name;
  this.sex = sex;
};

Person.prototype.showInfo = function () {
  console.log(this.name, this.sex);
};

let p1 = myNew(Person, 'hansy', 'male');

console.log(p1);
