var Snowman = require('./Snowman');

class Human {
  constructor(name) {
    this.name = name;
    this.wantsToBuildASnowman = true;
    this.materials = {
      snowballs: 0,
      coal: 0,
      buttons: 0,
      carrots: 0
    }
  }

  gatherMaterials(item, num) {
    this.materials[item] += num;
  }

  buildASnowman() {
    this.snowman = new Snowman(this.materials);
    return this.snowman;
  }
  
  placeMagicHat() {
    if (this.snowman.magicHat) {
      return `Woah, this snowman is coming to life!`
    } else {
      return 'I guess I didn\'t build it correctly.'
    }

  }
}

module.exports = Human;
