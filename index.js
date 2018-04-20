const path = require('path');

module.exports = {
  process(src, filename) {
    const result = {
      id: path.basename(filename),
      viewbox: '0 0 24 24'
    };

    return `module.exports = ${JSON.stringify(result)};`
  }
}
