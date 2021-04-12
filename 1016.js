const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const km = parseInt(lines.shift());
const minutos = (60 * km) / 30;

console.log(minutos + ' minutos');