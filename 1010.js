const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const line1 = lines.shift().split(' ');
const cod1 = parseInt(line1[0]);
const n1 = parseInt(line1[1]);
const valor1 = parseFloat(line1[2]);

const line2 = lines.shift().split(' ');
const cod2 = parseInt(line2[0]);
const n2 = parseInt(line2[1]);
const valor2 = parseFloat(line2[2]);

const total = (n1 * valor1) + (n2 * valor2);
console.log('VALOR A PAGAR: R$ ' + total.toFixed(2));