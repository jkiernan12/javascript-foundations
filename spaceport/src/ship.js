var Being = require('./being');
var Part = require('./part')
class Ship {
  constructor(ship) {
    this.name = ship.name;
    this.type = ship.type;
    this.maxCrew = ship.maxCrew;
    this.odometer = (ship.odometer) ? ship.odometer : 0;
    this.fuelCapacity = (ship.fuelCapacity) ? ship.fuelCapacity : 10;
    this.fuel = 0;
    this.captain = ship.captain;
    this.crew = [];
    this.cargo = [];
    this.parts = (ship.parts) ? ship.parts : {};
    this.readyToFly = false;
  }

  addCrew(newCrew) {
    for (var i = 0; i < newCrew.length; i++) {
      if (this.crew.length < this.maxCrew && newCrew[i] instanceof Being)
        this.crew.push(newCrew[i]);
      }
    }

    loadCargo(part) {
      if (part instanceof Part) {
        this.cargo.push(part)
      }
    }

    updatePart(part) {
      if (this.parts[part.type]) {
        var difference = this.parts[part.type].value - part.value;
      } else {
        var difference = 0;
      }
      this.parts[part.type] = part;
      return difference;
    }

    checkReadiness() {
      if (!this.captain) {
        this.readyToFly = false;
        return `Cannot fly without a captain`;
      } else if (!this.fuel) {
        return `Cannot fly without fuel`
      } else if (Object.keys(this.parts).length === 0) {
        return `Cannot fly without parts`
      } else {
        this.readyToFly = true;
        return `Good to go!`
      }
    }
  }

module.exports = Ship;
