const moment = require('moment');

class Car {
  constructor(plate, date, time, canCirculate) {
    if (plate === undefined || date === undefined || time === undefined) {
      throw new Error('Invalid initialization parameters');
    }
    this.plate = plate;
    this.datetime = moment(`${date} ${time}`, 'YYYY-MM-DD HH:mm');
    this.canCirculate = canCirculate;
  }

  toStr() {
    return (
      `${this.plate} ${this.datetime.format('YYYY-MM-DD')} ${this.datetime.format('HH:mm')} ` +
      `- ${this.canCirculate ? 'Yes' : 'No'}`
    );
  }
}

module.exports = Car;
