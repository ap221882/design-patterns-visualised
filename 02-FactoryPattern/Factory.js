class Computer {
  description;
  getInfo() {
    return this.description;
  }
}

class PC extends Computer {
  makeComputer(cpu, ram, storage, display) {
    this.description = `Dell PC: CPU ${cpu}, RAM ${ram}, Storage ${storage}, DISPLAY ${display}`;
  }
}

class Laptop extends Computer {
  makeComputer(cpu, ram, storage, display) {
    this.description = `Dell Laptop: CPU ${cpu}, RAM ${ram}, Storage ${storage}, DISPLAY ${display}`;
  }
}

class Factory {
  getComputer(type) {
    const factoryMapper = {
      PC: new PC(),
      Laptop: new Laptop(),
    };
    const generateInstance = (className) => new className();
    // return factoryMapper?.[type];
    return generateInstance(type);
  }
}

class Order {
  placeOrder(type, cpu, ram, storage, display) {
    let product;

    const computerFactory = new Factory();
    //~! removed switch case
    // switch (type) {
    //   case "PC":
    //     product = new PC();
    //     product.makeComputer(cpu, ram, storage, display);
    //     return product;
    //   case "Laptop":
    //     product = new Laptop();
    //     product.makeComputer(cpu, ram, storage, display);
    //     return product;
    // }

    product = computerFactory.getComputer(type);
    product?.makeComputer(type, cpu, ram, storage, display);

    return product ? product : null;
  }
}

const order = new Order();

computer = order.placeOrder("PC", 4, 16, 512, 16);

console.log(computer.getInfo());
