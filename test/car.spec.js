const Car = require('../src/car');

describe('Car', () => {
  test('transform instance data to a formatted string', () => {
    const firstCar = new Car('some-plate', '2018-01-01', '18:00', true);
    const secondCar = new Car('another-plate', '2018-01-02', '19:00', false);
    expect(firstCar.toStr()).toEqual('some-plate 2018-01-01 18:00 - Yes');
    expect(secondCar.toStr()).toEqual('another-plate 2018-01-02 19:00 - No');
  });

  test('raises an error if provided plate is undefined', () => {
    try {
      new Car(undefined, 'some-date', 'some-time');
      fail('An exception should have been raised');
    } catch (e) {
      // test passes
    }
  });

  test('raises an error if provided date and time are undefined', () => {
    try {
      new Car('some-plate');
      fail('An exception should have been raised');
    } catch (e) {
      // test passes
    }
  });

  test('raises an error if provided time is undefined', () => {
    try {
      new Car('some-plate', 'some-date');
      fail('An exception should have been raised');
    } catch (e) {
      // test passes
    }
  });
});
