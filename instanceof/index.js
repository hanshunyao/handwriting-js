function myInstanceof(object, constructor) {
  let proto = object.__proto__;
  while (true) {
    if (proto === null) return false;
    if (proto === constructor.prototype) {
      return true;
    }
    proto = proto.__proto__;
  }
}

console.log(myInstanceof([], Array));
console.log([] instanceof Array);
