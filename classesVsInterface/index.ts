class Human {
  sleep() {
    console.log("Sleeping...");
  }
  eat() {
    console.log("Eating...");
  }
  love() {
    console.log("Love...");
  }
}

interface Developer {
  writeCode();
}

interface Poet {
  writePoems();
}

class Brendan extends Human implements Developer {
  writeCode() {
    console.log("writing code...");
  }
}

class Ajay extends Human implements Developer, Poet {
  writeCode() {
    console.log("writing code...");
  }

  writePoems() {
    console.log("Writing Poems...");
  }
}

class InterfaceDemo {
  constructor() {
    var eich = new Brendan();
    eich.eat();
    eich.love();
    eich.sleep();
    eich.writeCode();

    var pathak = new Ajay();
    var dev: Developer = eich;
    dev.writeCode();
    dev = pathak;

    const team: Array<Developer> = [];
    team.push(eich);
    team.push(pathak);
    team.forEach((dev) => dev.writeCode());

    const poetTeam: Array<Poet> = [];
    // poetTeam.push(eich) //~! gives error
    poetTeam.push(pathak);

    poetTeam.forEach((poet) => poet.writePoems());
  }
}
