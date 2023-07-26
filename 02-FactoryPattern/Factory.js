class Factory {
  getComputer(type) {
    const module = require(`./computers/${type}.js`);
    const computer = new module();

    return computer;
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

module.exports = { Computer };
