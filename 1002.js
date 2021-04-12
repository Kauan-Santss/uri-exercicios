const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const n = 3.14159;
const raio = parseFloat(lines.shift());
const area = n * (raio * raio);

console.log('A=' + area.toFixed(4));