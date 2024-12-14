// 实现 Lodash.get 方法
function myGet(object, pathParam, defaultValue) {
  if (object === null) return defaultValue;
  let count = 0;
  // 如果是数组直接使用。
  // 如果不是就先把 [] 的属性换成 . 的方法连接之后 利用 . 分割出递进的属性
  const path = Array.isArray(pathParam) ? pathParam : pathParam.replace(/\["(.*?)"\]/g, '.$1').replace(/\[(\d+)\]/g, '.$1').split('.');
  const length = path.length;
  console.log(path);
  while (object != null && count < length) {
    object = object[String(path[count])];
    count += 1;
  }
  const result = (count && count === length ? object : undefined);

  return result === undefined ? defaultValue : result;
}

// 范例
const object = { a: [{ b: { c: 3 } }] };
const result1 = myGet(object, 'a[0].b.c');
const result2 = myGet(object, 'a[0]["b"]["c"]');
const result3 = myGet(object, 'a[100].b.c', 'default');
console.log(result1, result2, result3);
