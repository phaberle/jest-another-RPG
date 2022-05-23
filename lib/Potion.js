
// [LINE -> 'this.name=name||...'] if name is truthy—that is to say, it can be coerced to true—then this.name = name. If name is not truthy, then this.name = this.types[Math.floor(Math.random() * this.types.length)] or a random type of potion.

class Potion {
  constructor(name) {
    this.types = ['strength', 'agility', 'health'];
    this.name = name || this.types[Math.floor(Math.random() * this.types.length)];
    if (this.name === 'health') {
      this.value = Math.floor(Math.random() * 10 + 30);
    } else {
      this.value = Math.floor(Math.random() * 5 + 7);
    }
  }
}

module.exports = Potion;