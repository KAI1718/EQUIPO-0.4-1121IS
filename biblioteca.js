var biblioteca = {
    "nombre": "Biblioteca Central del Valle",
    "direccion": "Calle Emiliano Zapata No. 3",
    "cantLibros": 18,
    "generos": {
        "aventura": {
            "cantLibros": 6,
            "autores": {
                "Julio Verne": {
                    "vivo": false,
                    "obras": ["5 semanas en globo", "Los hermanos Kip", "El pequeño buen hombre"]
                },
                "Stevenson Robert Louis": {
                    "vivo": false,
                    "obras": ["Diablo en la botella", "La isla del tesoro", "La flecha negra"]
                }
            }
        },
        "cienciaFiccion": {
            "cantLibros": 6,
            "autores": {
                "H.G Wells": {
                    "vivo": false,
                    "obras": ["La maquina del tiempo", "La isla del doctor Moreau", "La guerra de losmundos", "Guerra"]
                },
                "James Dashner": {
                    "vivo": false,
                    "obras": ["El corredor de laberintos", "El juego infinito", "La realidad 13"]
                }
            }
        },
        "drama": {
            "cantLibros": 6,
            "autores": {
                "Andrea Longarela": {
                    "vivo": false,
                    "obras": ["Fuimos un invierno", "Lista de oliva", "Amor se escribe con H"]
                },
                "Julia Navarro": {
                    "vivo": true,
                    "obras": ["La sangre de los inocentes", "Dime quien soy", "La hermandad de la Sabana Santa"]
                }
            }
        }
    }
};

var genero = prompt("Que genero quiere leer?");
var autor = prompt("De que autor?");
var obras = [];

switch(genero) {
    case "aventura":
        obras = biblioteca["generos"]["aventura"]["autores"][autor]["obras"];

        console.log("Puedes leer: " + obras);
        break;
    case "ciencia ficcion":
        obras = biblioteca["generos"]["cienciaFiccion"]["autores"][autor]["obras"];

        console.log("Puedes leer: " + obras);
        break;
    case "drama":
        obras = biblioteca["generos"]["drama"]["autores"][autor]["obras"];

        console.log("Puedes leer: " + obras);
        break;
}
