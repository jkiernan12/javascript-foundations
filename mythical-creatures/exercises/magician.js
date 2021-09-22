class Magician {
  constructor(person) {
    this.name = `The Great ${person.name}`;
    this.assistant = person.assistant
    this.favoriteAccessory = (person.clothing) ? person.clothing : "top hat";
    this.confidencePercentage = 10;
  }
  performIncantation(spell) {
    return `${spell.toUpperCase()}!`;
  }
  performTrick() {
    this.confidencePercentage += 10;
    return (this.favoriteAccessory === "top hat")
    ? "PULL RABBIT FROM TOP HAT" : "PULL DOVE FROM SLEEVE"
  }
  performShowStopper() {
    if (this.confidencePercentage < 100 || this.assistant === false) {
      return "Oh no, this trick is not ready!"
    } else {
      return "WOW! The magician totally just sawed that person in half!"
    }
  }
}
module.exports = Magician;
