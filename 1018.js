const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const notasI = parseInt(lines.shift())

const atual = notasI

const notas100 = Math.floor(atual / 100)
atual -= notas100 * 100

const notas50 = Math.floor(atual / 50)
atual -= notas50 * 50

const notas20 = Math.floor(atual / 20)
atual -= notas20 * 20

const notas10 = Math.floor(atual / 10)
atual -= notas10 * 10

const notas5 = Math.floor(atual / 5)
atual -= notas5 * 5

const notas2 = Math.floor(atual / 2)
atual -= notas2 * 2

const notas1 = atual

console.log(notasI)
console.log(notas100 + " nota(s) de R$ 100,00")
console.log(notas50 + " nota(s) de R$ 50,00")
console.log(notas20 + " nota(s) de R$ 20,00")
console.log(notas10 + " nota(s) de R$ 10,00")
console.log(notas5 + " nota(s) de R$ 5,00")
console.log(notas2 + " nota(s) de R$ 2,00")
console.log(notas1 + " nota(s) de R$ 1,00")