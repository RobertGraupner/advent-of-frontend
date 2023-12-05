export class ChristmasEmitter {
  private events: { [key: string]: Function[] } = {};

  on(eventName: string, callback: Function) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  }

  emit(eventName: string) {
    if (this.events[eventName]) {
      this.events[eventName].forEach(callback => callback());
    }
  }

  off(eventName: string, callback: Function) {
    if (this.events[eventName]) {
      this.events[eventName] = this.events[eventName].filter(cb => cb !== callback);
    }
  }
}