class Laptop extends Computer {
  makeComputer(cpu, ram, storage, display) {
    this.description = `Dell Laptop: CPU ${cpu}, RAM ${ram}, Storage ${storage}, DISPLAY ${display}`;
  }
}

module.exports = Laptop;
