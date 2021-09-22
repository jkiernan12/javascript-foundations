class Potion {
    constructor(name, rarity) {
        this.name = name;
        this.rareness = rarity || 0;
    }

    isRare() {
        if (this.rareness >= 8) {
            return true;
        } else {
        return false;
        }
    }
}

module.exports = Potion;