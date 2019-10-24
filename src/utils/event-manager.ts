export default class {
  private listeners: {
    [eventName: string]: Function[];
  };

  constructor() {
    this.listeners = {};
  }

  on(eventName: string, handler: Function) {
    this.listeners[eventName] = [...(this.listeners[eventName] || []), handler];
  }

  off(eventName: string, handler: Function) {
    let handlers = this.listeners[eventName];

    if (handlers) {
      this.listeners[eventName] = handlers.filter(fn => fn === handler);
    }
  }

  trigger(eventName: string, ...args: any[]) {
    const handlers = this.listeners[eventName];

    if (handlers) {
      handlers.forEach(handler => handler.apply(null, args));
    }
  }
}
