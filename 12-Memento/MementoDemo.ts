class Memento {
  //# collecting history
  accumulator: Record<string, unknown>; //~? this can be an indexed/non-indexed, FIFO, LIFO any data structure

  constructor() {
    this.accumulator = {};
  }

  addToAccumulator(key: string, value: unknown) {
    this.accumulator[key] = value;
  }

  getValue(key: string) {
    return this.accumulator[key];
  }

  getCurrentMemento() {
    return this.accumulator;
  }
}

class LocationDemo {
  private static locationSequence = 0;
  private sequence = 0;
  private city: string = "";

  public moveTo(city: string): void {
    this.city = city;
    this.sequence = LocationDemo.locationSequence++;
  }

  public print(): void {
    console.log(`${this.sequence}: ${this.city}`);
  }
}

let locationDemo = new LocationDemo();

const locationMemento = new Memento();
locationDemo.moveTo("Kolkata");
locationMemento.addToAccumulator("First", "Kolkata");
locationDemo.print();
locationDemo.moveTo("Indore");
locationMemento.addToAccumulator("Second", "Indore");
locationDemo.print();
console.log(locationMemento.getValue("First"), "-- Getting value from Memento");

locationDemo.moveTo("Mumbai");
locationMemento.addToAccumulator("Third", "Mumbai");
locationDemo.print();
console.log(locationMemento.getCurrentMemento());
