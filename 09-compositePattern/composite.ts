class Developer {
    public name: string;
    public salary: number;

    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
    }
}

class Manager {
    public name: string;
    public salary: number;
    
    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
    }
}

const devList: Developer[] = [];
const mgrList: Manager[] = [];

devList.push(new Developer("Brendan Eich", 100000));
devList.push(new Developer("James Gosling", 200000));
devList.push(new Developer("Guido van Rossum", 250000));
devList.push(new Developer("Anders Hejlsberg", 350000));

mgrList.push(new Manager("Dennis Ritchie", 500000));
mgrList.push(new Manager("Alan Kay", 500000));

let sum: number = 0;
devList.forEach(dev => sum += dev.salary);
mgrList.forEach(mgr => sum += mgr.salary);

console.log(`The total company salary is ${sum}`);


/**
 * ~?  Implement a common interface called Employee with calculate() method, 
 * ~?  which is triggered for CEO, which in turn calls managers, who in turn 
 * ~?  call devs and then calculate() total salary for the entire company
 */