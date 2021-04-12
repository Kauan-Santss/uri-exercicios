const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const x = parseInt(lines.shift());
const y = parseFloat(lines.shift());
const media = x / y;

console.log(media.toFixed(3) + ' km/l');