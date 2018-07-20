#!/usr/bin/env node

const ioHandler = require('./ioHandler');
const Car = require('./car');
const RulesService = require('./rulesService');

class App {
  getCarData(inputLine) {
    try {
      const c = inputLine.split(' ');
      const car = new Car(c[0], c[1], c[2]);
      car.canCirculate = RulesService.canCirculate(car.plate, car.datetime);
      return car.toStr();
    } catch (e) {
      return 'Invalid car data';
    }
  }

  predict(filePath) {
    let rawInput;
    try {
      rawInput = ioHandler.parseFileAsList(filePath);
    } catch (e) {
      ioHandler.error(`No such file or directory: ${filePath}`);
    }
    if (rawInput) {
      const carData = rawInput.map(this.getCarData);
      ioHandler.print(carData);
    }
  }
}

module.exports = App;

const main = () => {
  const filePath = process.argv[2];
  if (!filePath) {
    console.info(
      'You must provide a valid path for the program input. I.E.: ./src/main.js input.txt'
    );
    return;
  }
  new App().predict(filePath);
};

main();
