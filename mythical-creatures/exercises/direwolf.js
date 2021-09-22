class Direwolf {
  constructor(name, home, size) {
    this.name = name;
    this.home = (home) ? home : "Beyond the Wall";
    this.size = (size) ? size : "Massive";
    this.starksToProtect = [];
    this.huntsWhiteWalkers = true;
  }

  protect(stark) {
    if (this.home === stark.location && this.starksToProtect.length < 2) {
      this.starksToProtect.push(stark);
      stark.safe = true;
      this.huntsWhiteWalkers = false;
    }
  }

  leave(stark) {
    for (var i = 0; i < this.starksToProtect.length; i++) {
      if (this.starksToProtect[i] === stark) {
        stark.safe = false;
        this.starksToProtect.splice(i, 1);
      }
    }
  }
}

module.exports = Direwolf;