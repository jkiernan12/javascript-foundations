class Vampire {
  constructor(name, pet) {
    this.name = name;
    this.pet = (pet) ? pet : "bat";
    this.thirsty = true;
    this.ouncesDrank = 0;
  }
  drink() {
    if (this.ouncesDrank >= 50) {
      return "I'm too full to drink anymore!"
    } else {
      this.thirsty = false;
      this.ouncesDrank += 10;
    }
  }
}
module.exports = Vampire;
