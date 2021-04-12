const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const a = parseFloat(lines.shift());
const b = parseFloat(lines.shift());
const media = ((3.5 * a) + (7.5 * b)) / 11;

console.log('MEDIA = ' + media.toFixed(5));