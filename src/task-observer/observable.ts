export class Observable {
  observable: Array<(data: number) => void> = [];
  state: number;
  constructor(initialState: number) {
    this.state = initialState;
  }

  subscribe = (fn: () => void) => {
    const callback = fn;
    this.observable = [...this.observable, callback];

    return () => this.unsubscribe(callback);
  };

  unsubscribe = (fn: () => void) => {
    console.log('unsubscribe');
    this.observable = this.observable.filter((obs) => obs !== fn);
  };

  notify = (data = this.state) => {
    this.observable.forEach((fn) => fn(data));
  };
}
