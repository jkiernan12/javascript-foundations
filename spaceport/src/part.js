class Part {
  constructor(part) {
    this.name = part.name;
    this.type = part.type;
    this.value = part.value;
    this.broken = false;
    this.isValid = true;
    if (this.name === undefined) {
      this.checkForValidity = `This part needs a name!`
      this.isValid = false;
    } else if (this.type === undefined) {
      this.checkForValidity = 'This part needs a type!';
      this.isValid = false;
    } else if (this.value === undefined) {
      this.checkForValidity = 'This part needs a value!';
      this.isValid = false;
    }
  }
}
module.exports = Part;
