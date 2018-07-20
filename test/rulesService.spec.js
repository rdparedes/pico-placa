const RulesService = require('../src/rulesService');
const moment = require('moment');

describe('RulesService', () => {
  describe('canCirculate', () => {
    describe('when provided datetime is a weekend', () => {
      test('returns true', () => {
        const saturday = moment('2018-07-21 00:00');
        expect(RulesService.canCirculate('some-plate', saturday)).toBe(true);
      });
    });

    describe('when provided datetime is a weekday', () => {
      test('returns true when datetime is not in the restriction time frame', () => {
        const datetime = moment('2018-07-16 10:00');
        expect(RulesService.canCirculate('some-plate', datetime)).toBe(true);
      });
      test('returns true when last char of plate does not match weekday rule', () => {
        const datetime = moment('2018-07-16 00:00');
        expect(RulesService.canCirculate('ABC-119', datetime)).toBe(true);
      });
      test(
        'returns false when datetime is inside the restriction time frame and last char of plate' +
          ' matches weekday rule',
        () => {
          const datetime = moment('2018-07-16 17:00');
          const plate = 'ABC-112';
          expect(RulesService.canCirculate(plate, datetime)).toBe(false);
        }
      );
    });
  });
});
