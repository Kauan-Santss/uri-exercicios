const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const line = lines.shift().split(" ");
const valor1 = parseInt(line[0]);
const valor2 = parseInt(line[1]);
const valor3 = parseInt(line[2]);

if (valor1 > valor2 && valor1 > valor3) {
    console.log(valor1 + ' eh o maior');
} else if (valor2 > valor3) {
    console.log(valor2 + ' eh o maior');
} else {
    console.log(valor3 + ' eh o maior');
}