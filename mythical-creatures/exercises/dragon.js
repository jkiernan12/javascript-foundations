class Dragon {
  constructor(name, rider) {
    this.name = name;
    this.rider = rider;
    this.hungry = true;
    this.hungryCounter = 0;
  }
  greet() {
    return `Hi, ${this.rider}!`
  }
  eat() {
    this.hungryCounter++;
    if (this.hungryCounter >= 3) {
      this.hungry = false;
    }
  }
}

module.exports = Dragon;
