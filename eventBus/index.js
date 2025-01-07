// 封装事件总线实现数据传递
class EventBus {
  constructor() {
    // 事件列表
    this.events = {}
  }
  /**
   * @description: 订阅事件
   * @param {*} event 订阅的时间
   * @param {*} listener 回调函数
   */
  on(event, listener) {
    if (!this.events[event]) {
      // 说明当前没有这个类型
      this.events[event] = []
    }
    this.events[event].push(listener)
  }

  /**
   * @description: 发布事件
   * @param {*} event 事件类型
   * @param {*} data 回调函数参数
   */
  emit(event, data) {
    if (this.events[event]) {
      // 首先有这个类型
      // 通知这个类型下面的所有的订阅者（listener）执行一遍
      this.events[event].forEach((listener) => {
        listener(data)
      })
    }
  }

  /**
   * @description: 取消订阅
   * @param {*} event 事件类型
   * @param {*} listener 回调函数
   */
  off(event, listener) {
    if (this.events[event]) {
      // 说明有这个类型
      this.events[event] = this.events[event].filter((item) => {
        return item !== listener
      })
    }
  }
}

const eventBus = new EventBus()
export default eventBus
