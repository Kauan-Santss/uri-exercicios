const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const line1 = lines.shift().split(' ');
const x1 = parseFloat(line1[0]);
const y1 = parseFloat(line1[1]);

const line2 = lines.shift().split(' ');
const x2 = parseFloat(line2[0]);
const y2 = parseFloat(line2[1]);

const distancia = Math.sqrt(Math.pow((x2 - x1), 2.0) + Math.pow((y2 - y1), 2.0));
console.log(distancia.toFixed(4));