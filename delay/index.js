// 实现延时实现
// promise
const delay = time => {
  return new Promise(resolve => setTimeout(resolve,time))
}
delay(1000).then(()=>{
  console.log(1)
})
// ES5
function delay(callback,time) {
  if(typeof callback === 'function')
    setTimeout(callback,time)
}
 
function output(){
  console.log(1);
}
delay(output,1000);
