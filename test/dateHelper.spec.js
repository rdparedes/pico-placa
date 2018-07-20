const DateHelper = require('../src/dateHelper');
const moment = require('moment');

describe('DateHelper', () => {
  const DATETIME_FORMAT = 'YYYY-MM-DD HH:mm';

  test('isWeekday returns true when datetime is a weekday', () => {
    const date = moment('2018-07-19 00:00', DATETIME_FORMAT);
    expect(DateHelper.isWeekDay(date)).toBe(true);
  });

  test('isWeekday returns false when datetime is a weekend', () => {
    const date = moment('2018-07-21 00:00', DATETIME_FORMAT);
    expect(DateHelper.isWeekDay(date)).toBe(false);
  });

  test('isBetweenTimes returns true when given datetime is between 9:00 and 10:00', () => {
    expect(
      DateHelper.isBetweenTimes(moment('2018-07-17 9:00', DATETIME_FORMAT), '9:00', '10:00')
    ).toBe(true);
  });

  test('isBetweenTimes returns false when given datetime is outside 9:00 and 10:00', () => {
    expect(
      DateHelper.isBetweenTimes(moment('2018-07-17 17:35', DATETIME_FORMAT), '9:00', '10:00')
    ).toBe(false);
  });
});
