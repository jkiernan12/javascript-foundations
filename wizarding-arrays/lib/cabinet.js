class Cabinet {
    constructor() {
        this.potions = [];
    }

    isEmpty() {
        if (this.potions.length) {
            return false
        } else {
            return true;
        }
    }

    add(potion) {
        if (potion.length) {
            for (var i = 0; i < potion.length; i++) {
            this.potions.push(potion[i]);
            }
        } else {
            this.potions.push(potion)
        }
    }

    takeFirstPotion() {
        var firstPotion = this.potions.splice(0, 1);
        return firstPotion[0];
    }

    takePotionWithName(name) {
        for (var i = 0; i < this.potions.length; i++) {
            if (this.potions[i].name === name) {
                var namedPotion = this.potions.splice(i, 1);
                return namedPotion[0];
            }
        }
    }

    count(name) {
        var counter = 0;
        for (var i = 0; i < this.potions.length; i++) {
            if (this.potions[i].name === name) {
                counter++;
            }
        }
        return counter;
    }
}

module.exports = Cabinet;