class Wizard {
    constructor(wizard) {
        this.name = wizard.name;
        this.petsCount = 0;
        this.pets = [];
    }

    adoptPet(pet) {
        this.petsCount++;
        this.pets.push(pet);
    }

    petList() {
        var list = "";
        for (var i = 0; i < this.pets.length; i++) {
            var currentPet = this.pets[i];
            var article = (i === this.pets.length - 1) ? "." : "; ";
            list += `${this.checkVowel(currentPet.type[0])} ${currentPet.type} named ${currentPet.name}${article}`
        }
        return list;
    }

    checkVowel(letter) {
        var vowels = {"a": true, "e": true, "i": true, "o": true, "u": true, "y": true};
        return (vowels[letter]) ? "An" : "A";
    }

    getWand(wand) {
        this.wand = wand;
    }

    castSpell(spell) {
        return this.wand.cast(spell);
    }
}

module.exports = Wizard;