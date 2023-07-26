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

module.exports = PC;
