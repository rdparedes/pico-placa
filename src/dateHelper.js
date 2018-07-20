const moment = require('moment');

const SATURDAY = 6;
const SUNDAY = 0;
const DATE_FORMAT = 'YYYY-MM-DD';
const DATETIME_FORMAT = `${DATE_FORMAT} HH:mm`;

class DateHelper {
  static isWeekDay(date) {
    const dayOfWeek = date.day();
    return ![SATURDAY, SUNDAY].includes(dayOfWeek);
  }

  static isBetweenTimes(givenDatetime, lowerLimit, upperLimit) {
    const givenDate = givenDatetime.format(DATE_FORMAT);
    return givenDatetime.isBetween(
      moment(`${givenDate} ${lowerLimit}`, DATETIME_FORMAT),
      moment(`${givenDate} ${upperLimit}`, DATETIME_FORMAT),
      null,
      '[]'
    );
  }
}

module.exports = DateHelper;
