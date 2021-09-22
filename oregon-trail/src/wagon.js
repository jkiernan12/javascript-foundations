class Wagon {
    constructor(wagon) {
        this.title = wagon.name;
        this.wheels = (wagon.wheels) ? wagon.wheels : [];
        this.axles = (wagon.axles) ? wagon.axles : [];
        this.oxen = (wagon.oxen) ? wagon.oxen : [];
        this.yokes = (wagon.yokes) ? wagon.yokes : [];
        this.food = wagon.food;
        this.ammunition = wagon.ammunition;
        this.clothes = wagon.clothes;
        this.settlers = (wagon.settlers) ? wagon.settlers : [];
    }

    addPart(part) {
        var partName = (part.type === "ox") ? "oxen" : part.type + "s";
        this[partName].push(part);
    }

    canTravel() {
        var requiredYokes = this.oxen.length / 2;
        var livingSettlers = this.settlers
        if (this.checkWagonParts(this.wheels) >= 4 && 
        this.checkWagonParts(this.axles) >= 2 &&
        this.checkWagonParts(this.oxen)>= 2 &&
        this.checkWagonParts(this.yokes) >= requiredYokes &&
        this.checkLiving(this.settlers) >= 1) {
                return true;
            } else {
                return false;
            }
    }
    checkLiving(settlers) {
        var livingCounter = 0;
        for (var i = 0; i < settlers.length; i++) {
            if (settlers[i].status !== "dead") {
                livingCounter++
            }
        }
        return livingCounter;
    }
    checkWagonParts(parts) {
        var functionalCounter = 0;
        for (var i = 0; i < parts.length; i++) {
            if (!parts[i].broken) {
                functionalCounter++
            }
        }
        return functionalCounter;
    }
}

module.exports = Wagon;