var Part = require("./part.js");
class Shop {
    constructor(shop) {
        this.name = shop.name;
        this.inventory ={};
    }

    addInventory(part) {
        if (part instanceof Part) {
            this.inventory[part.type] = part
        }

    }

    outfitShip(ship, part) {
        if (! ship.captain) {
            return `cannot outfit a ship without a captain`
        }

        var price = this.inventory[part].value;
        var captainCredits = ship.captain.credits;
         if (captainCredits < price) {
            return `you require ${price - captainCredits} more credits to make this purchase`
        } else {
            ship.captain.credits -= price;
            ship.parts[part] = this.inventory[part];
            delete this.inventory[part];
            return `${part} added to ship`;
            console.log(captainCredits)
        }
    }
}

module.exports = Shop;