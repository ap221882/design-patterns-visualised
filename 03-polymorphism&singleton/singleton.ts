class Singleton {
  private instance = new Singleton();
  private count: number;

  constructor() {
    this.count = 0;
  }

  incrementCounter() {
    return this.count++;
  }

  static getInstance() {
    return this.instance;
  }
}

const obj1 = Singleton.getInstance();
