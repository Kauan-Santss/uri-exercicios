const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const nome = lines.shift();
const salarioFixo = parseFloat(lines.shift());
const vendas = parseFloat(lines.shift());
const total = ((vendas * 15) / 100) + salarioFixo;

console.log('TOTAL = R$ ' + total.toFixed(2));