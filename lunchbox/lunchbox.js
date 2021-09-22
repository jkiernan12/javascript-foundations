
class LunchBox {
    constructor(box) {
        this.owner = box.owner;
        this.material = box.madeOf;
        this.shape = box.shape;
        this.color = box.color;
        this.snacks = [];
    }

    acquireSnack(snack) {
        snack.isInLunchBox = true;
        this.snacks.push(snack);
    }

    findHealthySnacks() {
        var healthySnacks = [];
        for (var i = 0; i < this.snacks.length; i++) {
            if (this.snacks[i].checkForHealthy()) {
                healthySnacks.push(this.snacks[i].type);
            }
        }
        return healthySnacks;
    }
}

module.exports = LunchBox;
