class Fairy {
  constructor(name) {
    this.name = name;
    this.dust = 10;
    this.clothes = {dresses: ['Iris']};
    this.disposition = "Good natured";
    this.humanWards = [];
  }
  receiveBelief() {
    this.dust++;
  }
  believe() {
    this.dust += 10;
  }
  makeDresses(dressArray) {
    var currentDresses = this.clothes.dresses;
    for (let i = 0; i < dressArray.length; i++) {
      currentDresses.push(dressArray[i]);
    }
  }
  becomeProvoked() {
    this.disposition = "Vengeful";
  }
  replaceInfant(child) {
    if (this.disposition === "Vengeful") {
      child.disposition = "Malicious";
      this.humanWards.push(child);
    }

    if (this.humanWards.length >= 3) {
      this.disposition = "Good natured";
    }
    return child;
  }
}

module.exports = Fairy;
