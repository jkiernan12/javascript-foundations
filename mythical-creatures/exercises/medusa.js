var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }
  gazeAtVictim(person) {
    if (this.statues.length === 3) {
      var freedPerson = this.statues.shift();
      freedPerson = new Person(freedPerson.name);
      freedPerson.mood = "relieved";

      var newStatue = new Statue(person.name);
      this.statues.push(newStatue);

      return freedPerson;
    }
      var newStatue = new Statue(person.name);
      this.statues.push(newStatue);

  }
}

module.exports = Medusa;
