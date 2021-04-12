const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');
const pi = 3.14159;

const raio = parseFloat(lines.shift());
const volume = (4.0 / 3) * pi * Math.pow(raio, 3.0);

console.log('VOLUME = ' + volume.toFixed(3));