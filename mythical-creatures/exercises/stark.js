var Direwolf = require("./direwolf")
class Stark {
  constructor(person) {
    if (person) {
      this.name = person.name;
      this.location = (person.area) ? person.area : "Winterfell";
      this.safe = false;
    }
  }

  sayHouseWords() {
    if (this.safe) {
      return `The North Remembers`
    } else {
      return `Winter is Coming`
    }
  }

  callDirewolf(name) {
    var currentDirewolf = new Direwolf(name, this.location);
    currentDirewolf.protect(this);
    return currentDirewolf;
  }
}

module.exports = Stark;