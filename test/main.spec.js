const App = require('../src/main');

describe('pico-placa', () => {
  test('prints a list of cars with Pico y Placa information', () => {
    const consoleSpy = jest.spyOn(global.console, 'info');
    const subject = new App();
    const expectedResult = [
      'PCB-1041 2018-07-16 18:35 - No',
      'PXB-1113 2018-07-17 08:35 - No',
      'PAB-2302 2018-07-17 20:00 - Yes',
      'PAB-2309 2018-07-18 10:00 - Yes',
      'PAB-2305 2018-07-18 10:00 - Yes',
      'Invalid car data'
    ]
    subject.predict('./input.txt');
    expect(consoleSpy).toHaveBeenCalledWith(expectedResult[0]);
    expect(consoleSpy).toHaveBeenCalledWith(expectedResult[1]);
    expect(consoleSpy).toHaveBeenCalledWith(expectedResult[2]);
    expect(consoleSpy).toHaveBeenCalledWith(expectedResult[3]);
    expect(consoleSpy).toHaveBeenCalledWith(expectedResult[4]);
    expect(consoleSpy).toHaveBeenCalledWith(expectedResult[5]);
    consoleSpy.mockRestore();
  });

  test('prints an error if provided file path is not valid', () => {
    const consoleSpy = jest.spyOn(global.console, 'error');
    const subject = new App();
    subject.predict('./invalid-path');
    expect(consoleSpy).toHaveBeenCalledWith(`No such file or directory: ./invalid-path`);
    consoleSpy.mockRestore();
  });
});