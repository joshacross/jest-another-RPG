const Potion = require('../lib/Potion');

this.inventory = [new Potion('health'), new Potion()];

module.exports = function() {
    this.name = 'health';
    this.value = 20;
};