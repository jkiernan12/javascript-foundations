class Werewolf {
  constructor(name) {
    this.name = name;
    this.form = "human";
    this.hungry = false;
  }
  completeTransformation() {
    if (this.form === "human") {
      this.form = "wolf";
      this.hungry = true;
      return "Aaa-Woooo!"
    } else {
      this.form = "human";
      this.hungry = false;
      return "Where are I?";
    }
  }
  eatVictim(person) {
    if (this.form === "wolf") {
      person.alive = false;
      this.form = "human";
      return `Yum, ${person.name} was delicious.`
    } else {
      return `No way am I eating ${person.name}, I'd like a burger!`
    }

  }
}
module.exports = Werewolf;
