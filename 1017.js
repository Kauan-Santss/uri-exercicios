const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const tempo = parseInt(lines.shift());
const velocidade = parseInt(lines.shift());
const kilometros = tempo * velocidade;
const media = kilometros / 12;

console.log(media.toFixed(3));