const ioHandler = require('../src/ioHandler');

describe('ioHandler', () => {
  test('parseFileAsList returns a list of strings given a valid file path', () => {
    const result = ioHandler.parseFileAsList('./input.txt');
    expect(result).toEqual([
      'PCB-1041 2018-07-16 18:35',
      'PXB-1113 2018-07-17 08:35',
      'PAB-2302 2018-07-17 20:00',
      'PAB-2309 2018-07-18 10:00',
      'PAB-2305 2018-07-18 10:00',
      'whatever whatever'
    ]);
  });
  test('parseFileAsList raises an error when provided path is invalid', () => {
    try {
      ioHandler.parseFileAsList('./invalid.path');
      fail();
    } catch (e) {
      // pass test
    }
  });
  test('print logs a list of strings on console', () => {
    const consoleSpy = jest.spyOn(global.console, 'info');
    ioHandler.print(['foo', 'bar']);
    expect(consoleSpy).toHaveBeenNthCalledWith(1, 'foo');
    expect(consoleSpy).toHaveBeenNthCalledWith(2, 'bar');
    consoleSpy.mockRestore();
  });

  test('error logs an error on console', () => {
    const consoleSpy = jest.spyOn(global.console, 'error');
    ioHandler.error('an error');
    expect(consoleSpy).toHaveBeenCalledWith('an error');
    consoleSpy.mockRestore();
  });
});
