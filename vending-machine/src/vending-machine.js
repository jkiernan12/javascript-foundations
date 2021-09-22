class VendingMachine {
  constructor(machine) {
    this.id = machine.id;
    this.isBroken = machine.isBroken;
    this.snacks = [];
  }
  addSnacks(snack) {
    var isStocked = false;
    for (var i = 0; i < this.snacks.length; i++) {
      if (snack.name === this.snacks[i].name && snack.price === this.snacks[i].price) {
        isStocked = true;
        break;
      }
    }
    if (! isStocked){
      this.snacks.push(snack);
    } else {
        return `Sorry, that snack is already stocked! Try adding a different snack.`
    }
  }
  purchaseSnack(name, amount) {
    for (var i = 0; i < this.snacks.length; i++) {
      if (this.snacks[i].name === name) {
        if (this.snacks[i].itemsInStock === 0) {
          return `Sorry, no items in stock. Try another item.`
        } else if (amount < this.snacks[i].price) {
          return `Sorry, not enough payment. Please add more money.`
        }
        this.snacks[i].itemsInStock--;
        return `Success! Here is $${amount - this.snacks[i].price} back!`;
      }
    }
  }
}

module.exports = VendingMachine;
