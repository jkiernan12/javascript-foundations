class Settler {
    constructor(person) {
        this.name = person.name;
        this.age = person.age;
        this.nationality = (person.nationality) ? person.nationality : "unknown";
        this.status = "healthy";
        this.ailments = [];
    }

    experienceDistress(ailment) {
        if (!(this.status === "dead")) {
            this.ailments.push(ailment)
        }
        
        var numAilments = this.ailments.length;
        if (numAilments === 0) {
            this.status = "healthy";
        } else if (numAilments === 1) {
            this.status = "fair";
        } else if (numAilments === 2) {
            this.status = "poor";
        } else {
            this.status = "dead"
        }
}
    heal() {
        if (!(this.status === "dead")) {
            this.ailments = [];
            this.status= "healthy"
        } else {
            return `Sorry, we can't heal a corpse. ${this.name} needs a proper burial!`
        }
    }
}

module.exports = Settler;