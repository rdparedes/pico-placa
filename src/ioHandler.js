const fs = require('fs');

class ioHandler {
  static parseFileAsList(filePath) {
    return fs.readFileSync(filePath, { encoding: 'utf-8' }).split('\n');
  }

  static print(list) {
    list.map(v => console.info(v));
  }

  static error(msg) {
    console.error(msg);
  }
}

module.exports = ioHandler;
