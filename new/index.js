// 使用 es5 语法版
function objectFactory() {
  var obj = new Object(),
    Constructor = [].shift.call(arguments);
  obj.__proto__ = Constructor.prototype;
  var ret = Constructor.apply(obj, arguments);
  return typeof ret === 'object' ? ret : obj;
}

// 使用 es6 语法版
function myNew(constructor, ...args) {
  // 1. 创建一个对象 let obj = new Object()
  // 2. 对象的原型指向构造器的原型 obj.__proto__ = constructor.prototype
  let obj = Object.create(constructor.prototype); // 两个步骤合并了
  // 3. 取到构造器外剩下参数 es6 写法 直接收集了 args
  // 4. 执行构造函数 收集返回值
  let res = constructor.apply(obj, args);
  // 5. 根据返回值 判断 返回值
  return typeof res === 'object' ? res : obj;
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
