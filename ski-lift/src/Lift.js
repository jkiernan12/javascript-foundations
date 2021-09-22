var Skier = require('./Skier');

class Lift {
  constructor(limit) {
  this.inService = true;
  this.limit = limit;
  this.skiers = [];
  this.safetyBar = 'up';
  }
  admitSkier (name, hasTicket) {
    var currentSkier = new Skier(name, hasTicket);
    if (!currentSkier.hasLiftTicket) {
      return `Sorry, ${currentSkier.name}. You need a lift ticket!`
    } else if (this.skiers.length < this.limit && currentSkier.hasLiftTicket) {
      this.skiers.push(currentSkier);
    } else {
      return `Sorry, ${currentSkier.name}. Please wait for the next lift!`
    }
  }
  startLift() {
    var missingSkiers = this.limit - this.skiers.length;
    if (!missingSkiers) {
      this.safetyBar = 'down';
    } else {
      if (missingSkiers === 1) {
        return `We still need ${missingSkiers} more skier!`
      } else {
        return `We still need ${missingSkiers} more skiers!`
      }

    }
  }
}

module.exports = Lift;
