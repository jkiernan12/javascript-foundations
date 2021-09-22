class Ogre {
  constructor(ogre) {
    this.name = ogre.name;
    this.home = (ogre.abode) ? ogre.abode : "Swamp";
    this.swings = 0;
  }
  encounter(human) {
    human.encounterCounter++;
    if (human.noticesOgre()) {
      this.swingAt(human);
    }
    if (this.swings % 2 && this.swings !== 0) {
      human.knockedOut = true;
    }
  }
  swingAt(human) {
    this.swings++;
  }
  apologize(human) {
    human.knockedOut = false;
  }
}

module.exports = Ogre;
