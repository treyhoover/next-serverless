const fs = require('fs');
const { join } = require('path');
const tachyonsGenerator = require('tachyons-generator');

const config = {
  typeScale: [3, 2.25, 1.5, 1.25, 1, 0.875],
  spacing: [0.25, 0.5, 1, 2, 4, 8, 16],
  lineHeight: [1, 1.25, 1.5],
  customMedia: [{ m: 48 }, { l: 64 }, { xl: 128 }],
  colors: {
    black: '#000',
    'near-black': '#111',
    'dark-gray': '#333',
    'mid-gray': '#555',
    gray: '#777',
    silver: '#999',
    'light-silver': '#aaa',
    'moon-gray': '#ccc',
    'light-gray': '#eee',
    'near-white': '#f4f4f4',
    white: '#fff',
    'dark-red': '#f00008',
    red: '#ff3223',
    orange: '#f3a801',
    gold: '#f2c800',
    yellow: '#ffde37',
    purple: '#7d5da9',
    'light-purple': '#8d4f92',
    'hot-pink': '#d62288',
    'dark-pink': '#c64774',
    pink: '#f49cc8',
    'dark-green': '#006C71',
    green: '#41D69F',
    navy: '#001b44',
    'dark-blue': '#00449e',
    blue: '#357edd',
    'light-blue': '#96ccff',
    'lightest-blue': '#cdecff',
    'washed-blue': '#f6fffe',
    'washed-green': '#e8fdf5',
    'washed-yellow': '#fff8d5',
    'light-pink': '#efa4b8',
    'light-yellow': '#f3dd70',
    'light-red': '#ffd3c0',
  },
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
