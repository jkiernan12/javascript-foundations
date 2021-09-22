class Centaur {

  constructor(obj) {
    this.name = obj.name;
    this.breed = obj.type;
    this.standing = true;
    this.layingDown = false;
    this.crankyLevel = 0
    if (this.crankyLevel >= 3) {
      this.cranky = true;
    } else {
      this.cranky = false;
    }
  }
  crankyCheck()  {
    this.cranky = (this.crankyLevel >= 3) ? true : false;
  }

  shootBow() {
    this.crankyLevel++;
    this.crankyCheck();
    if (this.standing && ! this.cranky) {
      return "Twang!!!";
    } else {
      return "NO!";
    }
  }

  run() {
    this.crankyLevel++;
    this.crankyCheck();
    if (this.standing && ! this.cranky) {
      return "Clop clop clop clop!!!";
    } else {
      return "NO!";
    }
  }

  sleep() {
    if (this.layingDown) {
      this.crankyLevel = 0;
      this.crankyCheck();
      return "ZZZZ"
    } else {
      return "NO!"
    }

  }

  layDown() {
    this.layingDown = true;
    this.standing = false;
  }

  standUp() {
    this.layingDown = false;
    this.standing = true;
  }

  drinkPotion() {
    if (this.standing) {
      this.crankyLevel = 0;
      this.crankyCheck();
    } else {
      return "Not while I'm laying down!"
    }

  }

}

module.exports = Centaur;
