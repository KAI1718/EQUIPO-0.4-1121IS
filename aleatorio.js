var nombres = [
    "Faviola",
    "Angel",
    "Joselyn",
    "Alondra",
    "Isaac",
    "Martin",
    "Jose",
    "Flor",
    "Josefa",
    "Hugo",
    "Felipe",
    "Marta",
    "Patricia",
    "Josefina",
    "Dolores",
    "Flora",
    "Francisco",
    "Martin",
    "Antonio",
    "luis",
    "Eduardo",
    "Erick",
    "Francisco",
    "Rafael",
    "Juan",
    "Alison"
];

var apellidos = [
    "cota",
   "navarro",
    "rincon",
    "santillan",
    "alvarez",
    "sapalu",
    "santiago",
    "reyes",
    "maturano",
    "leon",
    "cortez",
    "quiÃ±onez",
    "ortega",
    "gaona",
    "zamora",
    "melendez",
    "cruz",
    "medina",
    "antonio",
    "velazquez",
    "cota",
    "garcia",
    "hernandez",
    "dominguez",
    "ayala",
    "ortiz",
    "vega",
    "perez",
    "margarito",
    "castillejos"
];

for (let i = 0; i < 1000; i++) {
    console.log("Datos " + (i + 1));

    mostrarDatos();
}

function mostrarDatos() {
    let sexo = "";

    if (enteroAleatorio(0, 2) == 0) {
        sexo = "Masculino";
    } else {
        sexo = "Femenino";
    }

    let datos = {
        "Nombre": nombres[enteroAleatorio(0, nombres.length)],
        "ApellidoPaterno": apellidos[enteroAleatorio(0, apellidos.length)],
        "ApellidoMaterno": apellidos[enteroAleatorio(0, apellidos.length)],
        "Edad": enteroAleatorio(10, 90),
        "Sexo": sexo
    };

    console.log(datos);
}

function enteroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}