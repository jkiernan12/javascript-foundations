class Spell {
    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.executionHistory = [];
    }

    execute(target) {
        var allSpells = "";
        if (typeof target === "object") {
            for (var i = 0; i < target.length; i++) {
                allSpells += `Success! You've cast a spell on the ${target[i]}. `
                this.executionHistory.push(target[i]);
            }
            return allSpells.trim();
        } else {
            return `Success! You've cast a spell on the ${target}.`
        }

    }
    clearExecutionHistory() {
        this.executionHistory = [];
    }
}

module.exports = Spell;
