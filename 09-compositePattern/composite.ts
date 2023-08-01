class Developer {
  public name: string;
  public salary: number;

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }

  calculate() {
    return this.salary;
  }
}

class Manager {
  public name: string;
  public salary: number;
  public Developers: Developer[];

  constructor(name: string, salary: number, Developers: Developer[]) {
    this.name = name;
    this.salary = salary;
    this.Developers = Developers;
  }

  calculate() {
    let sum: number = 0;
    this.Developers.forEach((developer) => (sum += developer.calculate()));
    sum += this.salary;
    return sum;
  }
}

/**
 * ~?  Implement a common interface called Employee with calculate() method,
 * ~?  which is triggered for CEO, which in turn calls managers, who in turn
 * ~?  call devs and then calculate() total salary for the entire company
 */

class Employee {
  public name: string;
  public salary: number;
  public mgrList: Manager[];
  constructor(name: string, salary: number, mgrList: Manager[]) {
    this.name = name;
    this.salary = salary;
    this.mgrList = mgrList;
  }

  calculate() {
    let sum: number = 0;
    this.mgrList.forEach((mgr) => (sum += mgr.calculate()));

    sum += this.salary;
    return sum;
  }
}

const devList1: Developer[] = [];
const devList2: Developer[] = [];

devList1.push(new Developer("Brendan Eich", 100000));
devList1.push(new Developer("James Gosling", 200000));

devList2.push(new Developer("Guido van Rossum", 250000));
devList2.push(new Developer("Anders Hejlsberg", 350000));

const mgrList: Manager[] = [];
mgrList.push(new Manager("Dennis Ritchie", 500000, devList1));
mgrList.push(new Manager("Alan Kay", 500000, devList2));
const CEO = new Employee("Sundar Pichai", 10000000, mgrList);

const CTC = CEO.calculate();
console.log(`The total company salary is ${CTC}`);
