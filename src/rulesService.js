const DateHelper = require('./dateHelper');

const MORNING_LOWER_LIMIT = '7:00';
const MORNING_UPPER_LIMIT = '9:30';
const AFTERNOON_LOWER_LIMIT = '16:00';
const AFTERNOON_UPPER_LIMIT = '19:30';
const WEEKDAYS = {
  monday: 1,
  tuesday: 2,
  wednesday: 3,
  thursday: 4,
  friday: 5
};

class RulesService {
  constructor() {
    this.rules = {
      [WEEKDAYS.monday]: ['1', '2'],
      [WEEKDAYS.tuesday]: ['3', '4'],
      [WEEKDAYS.wednesday]: ['5', '6'],
      [WEEKDAYS.thursday]: ['7', '8'],
      [WEEKDAYS.friday]: ['9', '0']
    };
  }

  _isInsideRestrictedHours(datetime) {
    return (
      DateHelper.isBetweenTimes(datetime, MORNING_LOWER_LIMIT, MORNING_UPPER_LIMIT) ||
      DateHelper.isBetweenTimes(datetime, AFTERNOON_LOWER_LIMIT, AFTERNOON_UPPER_LIMIT)
    );
  }

  _plateIsRestricted(plate, datetime) {
    const dayOfTheWeek = datetime.day();
    const plateLastDigit = plate.slice(-1);
    return this.rules[dayOfTheWeek] ? this.rules[dayOfTheWeek].includes(plateLastDigit) : false;
  }

  canCirculate(plate, datetime) {
    const isWeekend = !DateHelper.isWeekDay(datetime);
    if (
      isWeekend ||
      !this._isInsideRestrictedHours(datetime) ||
      !this._plateIsRestricted(plate, datetime)
    ) {
      return true;
    }
    return false;
  }
}

module.exports = new RulesService();
