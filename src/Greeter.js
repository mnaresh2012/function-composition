module.exports = class Greeter {
  constructor(name = "World") {
    this.name = name;
  }

  greet() {
    return `Hello, ${this.name}!`;
  }
}