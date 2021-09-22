class SkatePark  {
  constructor(skate) {
    this.name = skate.name;
    this.yearFounded = skate.year;
    this.style = skate.type;
    this.features = skate.features;
    this.isPrivate = (skate.isPrivate) ? skate.isPrivate : false;
    this.cost = (skate.price) ? skate.price : 0;
    this.occupants = [];
  }
  admit(skater) {
    if (this.occupants.length === 3) {
      return `Sorry, we are at max capacity. Thank you for understanding.`
    }
    if (this.cost === 0) {
      this.occupants.push(skater);
      return  `Welcome to the free ${this.name} Skatepark!`
    } else {
      if (skater.money < this.cost) {
        return `Sorry, you don't have enough money.`
      } else {
        skater.money -= this.cost;
        this.occupants.push(skater);
        return `Welcome to ${this.name}, the cost will be $${this.cost}.00.`
      }

    }
  }
}

module.exports = SkatePark;
