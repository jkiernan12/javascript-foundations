class TrickOrTreater {
  constructor(costume, bag) {
    this.dressedUpAs = costume.style;
    this.bag = bag;
    this.hasCandy = false;
    this.countCandies = 0;
  }
  putCandyInBag(candy) {
    this.hasCandy = true;
    this.bag.fill(candy);
    this.countCandies = this.bag.count;
  }
  eat() {
    this.bag.count--;
    this.bag.candies.pop();
    this.countCandies = this.bag.count;
  }
}

module.exports = TrickOrTreater;
