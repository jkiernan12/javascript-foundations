class Unicorn {
  constructor(name, color) {
    this.name = name;
    this.color = (color) ? color : "white";
  }
  isWhite() {
    return (this.color === "white") ? true : false;
  }
  says(string) {
    return `**;* ${string} *;**`;
  }
}

module.exports = Unicorn;
