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

class iMac extends Computer {
  makeComputer(cpu, ram, storage, display) {
    this.description = `Apple iMac: CPU ${cpu}, RAM ${ram}, Storage ${storage}, DISPLAY ${display}`;
  }
}

class Macbook extends Computer {
  makeComputer(cpu, ram, storage, display) {
    this.description = `Apple Macbook: CPU ${cpu}, RAM ${ram}, Storage ${storage}, DISPLAY ${display}`;
  }
}

class OrderSystem {
  productList = [];
  create(type, cpu, ram, storage, display) {}
  placeOrder(type, cpu, ram, storage, display) {
    const product = this.create(type, cpu, ram, storage, display);
    this.productList.push(product);
    return product;
  }

  listOrder() {
    this.productList.forEach((product) => console.log(product.getInfo()));
  }
}

class Order extends OrderSystem {
  creator = {};
  create(type, cpu, ram, storage, display) {
    const product = this.creator[type.toLowerCase()]?.();
    product.makeComputer(cpu, ram, storage, display);
    return product;
  }
}

class DellVendor extends Order {
  constructor() {
    super();
    this.creator["pc"] = () => new PC();
    this.creator["laptop"] = () => new Laptop();
  }
}

class AppleVendor extends Order {
  constructor() {
    super();
    this.creator["imac"] = () => new iMac();
    this.creator["macbook"] = () => new Macbook();
  }
}

class Factory {
  getFactory(type) {
    const lookup = {
      dell: new DellVendor(),
      apple: new AppleVendor(),
    };

    return lookup?.[type.toLowerCase()];
  }
}

class Vendors {
  getVendor(vendorType) {
    // let vendor = null;
    // switch (vendorType.toLowerCase()) {
    //   case "dell":
    //     vendor = new DellVendor();
    //     break;
    //   case "apple":
    //     vendor = new AppleVendor();
    //     break;
    // }
    // return vendor;

    const vendorFactory = new Factory();
    return vendorFactory.getFactory(vendorType);
  }
}

const vendor = new Vendors();

let order = vendor.getVendor("Dell");
console.log("order", order);

order.placeOrder("PC", 4, 16, 512, 16);
order.listOrder();

order = vendor.getVendor("Apple");
order.placeOrder("MacBook", 4, 16, 512, 16);
order.listOrder();
