const Character2 = require('./Character2');
const Potion2 = require('./Potion2');

class Enemy2 extends Character2 {
    constructor(name, weapon) {
        super(name);

        this.weapon = weapon;
        this.potion = new Potion2();
    }
}

getDescription() {
    return `A ${this.name} holding a ${this.weapon} has appeared!`;
}

module.exports = Enemy2;