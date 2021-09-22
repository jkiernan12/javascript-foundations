class Skier {
  constructor(name, ticket) {
    this.name = name;
    this.hasLiftTicket = ticket;
    this.skillLevel = 1;
    this.nextSlope = 'green circle';
  }
  takeLesson() {
    this.skillLevel++;
  }
  pickSlope() {
    if (this.skillLevel >= 5) {
      this.nextSlope = 'black diamond';
    }
    else if (this.skillLevel >= 3) {
      this.nextSlope = 'blue square';
    }
  }
}

module.exports = Skier;
