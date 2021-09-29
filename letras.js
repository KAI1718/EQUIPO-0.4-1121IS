console.log("Pedir un numero al usuario, mostrar esa cantidad de palabras con esa cantidad de letras");

var cantidad = prompt("Cuantas palabras quiere?");

const minus = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const mayus = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

for (var i = 0; i < cantidad; i++) {
    var palabra = "";

    for (var j = 0; j < cantidad; j++) {
        palabra += minus[getRandomInt(0, (minus.length) - 1)];
    }

    console.log("Palabra " + (i + 1) + " = " + palabra);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
