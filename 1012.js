const line = lines.shift().split(' ');
const a = parseFloat(line[0]);
const b = parseFloat(line[1]);
const c = parseFloat(line[2]);

const triangulo = a * c / 2.0;
const circulo = 3.14159 * (c * c);
const trapezio = ((a + b) * c) / 2;
const quadrado = b * b;
const retangulo = a * b;

console.log('TRIANGULO: ' + triangulo.toFixed(3));
console.log('CIRCULO: ' + circulo.toFixed(3));
console.log('TRAPEZIO: ' + trapezio.toFixed(3));
console.log('QUADRADO: ' + quadrado.toFixed(3));
console.log('RETANGULO: ' + retangulo.toFixed(3));