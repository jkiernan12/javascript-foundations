class Gear {
    constructor(type, quantity) {
        this.type = type;
        this.quantity = quantity;
    }

    checkForValidity() {
        if (this.type === "food" || this.type === "ammunition" || this.type === "clothes") {
            return `Great, we'll need lots of ${this.type}!`
        } else {
            var wrongType = this.type;
            this.type = null;
            return `I don't think a ${wrongType} will help us.`
        }
    }
}

module.exports = Gear;
