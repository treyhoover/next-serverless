const fs = require('fs');
const { join } = require('path');
const tachyonsGenerator = require('tachyons-generator');
const colors = require('./colors');

const config = {
  typeScale: [3, 2.25, 1.5, 1.25, 1, 0.875],
  spacing: [0.25, 0.5, 1, 2, 4, 8, 16],
  lineHeight: [1, 1.25, 1.5],
  customMedia: [{ m: 48 }, { l: 64 }, { xl: 128 }],
  colors,
  nested: {
    links: ['blue', 'light-blue'],
  },
  borderWidths: [0, 0.125, 0.25, 0.5, 1, 2],
  borderRadius: [0, 0.125, 0.25, 0.5, 1],
  widths: [1, 2, 4, 8, 16],
  maxWidths: [1, 2, 4, 8, 16, 32, 48, 64, 96],
  heights: [1, 2, 4, 8, 16],
  tables: {
    striped: ['light-silver', 'moon-gray', 'light-gray', 'near-white'],
    stripe: ['light', 'dark'],
  },
  typography: {
    measure: [30, 34, 20],
  },
  opacity: [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0.05, 0.025, 0],
};

const generate = async () => {
  const tachy = tachyonsGenerator(config);

  const out = await tachy.generate();

  fs.writeFileSync(join(__dirname, 'docs.html'), out.docs);
  fs.writeFileSync(join(__dirname, 'tachyons.css'), out.css);
  fs.writeFileSync(join(__dirname, 'tachyons.min.css'), out.min);
};

generate();
