class Craft {
  constructor(material) {
    this.name = material.type;
    this.materials = material.materials;
    this.completed = false;
  }
  completeCraft() {
    this.completed = true;
    return "All done! It looks great!"
  }
  calculateProjectTotal() {
    var totalCost = 0;
    for (var i = 0; i < this.materials.length; i++) {
      totalCost += this.materials[i].calculateMaterialCost();
    }
    return totalCost;
  }
}

module.exports = Craft;
