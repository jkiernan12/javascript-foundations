class Hobbit {
  constructor(halfling) {
    this.name = halfling.name;
    this.age = 0;
    this.adult =  false;
    this.old = false;
    this.hasRing = false;
  }
  celebrateBirthday() {
    this.age++;
    this.adult = (this.age >= 33) ? true : false;
    this.old = (this.age >= 101) ? true : false;
  }
  getRing(){
    if (this.name === "Frodo") {
      this.hasRing = true;
      return "Here is the ring!";
    } else {
      return "You can't have it!";
    }
  }
}

module.exports = Hobbit;
