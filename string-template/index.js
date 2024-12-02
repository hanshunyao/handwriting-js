function render(template, data) {
  // 定义一个正则 {{variable}}
  const reg = /\{\{(\w+)\}\}/;
  
  // test() 方法执行一个检索，用来查看正则表达式与指定的字符串是否匹配。返回 true 或 false。
  if (reg.test(template)) {
    // 取出第一个字符串
    const temp = reg.exec(template)[1];
    // 将第一个模板字符串渲染
    template = template.replace(reg, data[temp]);
     // 递归的渲染并返回渲染后的结构
    return render(template, data);
  }
  return template;
}

let template = '我是{{job}}，年龄{{age}}，叫做{{name}}';
let me = {
  job: '前端工程师',
  age: 26,
  name:'hansy'
};
const result = render(template, me);
console.log(result);
