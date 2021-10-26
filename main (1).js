let alumnos = pedirDatos();

let operacion;

do {
    operacion = prompt("Que operacion desea realizar?\n"
        + "1 Cantidad de alumnos\n"
        + "2 Cantidad de alumnos por genero\n"
        + "3 Media de calificaciones\n"
        + "4 Alumno en especifico\n"
        + "5 Conjunto de alumnos\n"
        + "6 Informacion por grupo\n"
        + "7 Salir"
    );

    switch (operacion) {
        case "1":
            console.log("Cantidad de alumnos:");
            console.log(alumnos.length);
            break;
        case "2":
            console.log("Cantidad de alumnos por genero:");
            console.log(alumnosPorGenero(alumnos));
            break;
        case "3":
            console.log("Media de calificaciones:");
            console.log(mediaCalificaciones(alumnos));
            break;
        case "4":
            console.log("Alumno en especifico:");
            let info = buscarAlumno(alumnos);

            if (info != null) {
                console.log(info);
            } else {
                console.log("Alumno no encontrado");
            }
            break;
        case "5":
            console.log("Conjunto de alumnos:");
            conjuntoAlumnos(alumnos);
            break;
        case "6":
            console.log("Informacion por grupo:");
            conjuntoGrupo(alumnos);
            break;
        case "7":
            console.log("Salir");
            break;
        default:
            console.log("Entrada no valida");
            break;
    }
} while (operacion != 7);

//* INICIO FUNCIONES

/**
 * Solicitar los datos de los alumnos que se desan registrar.
 * Primero se pregunta la cantidad de alumnos que se van a registrar,
 * y después cada uno de los datos de cada un o de los alumnos.
 * 
 * @returns Un arreglo de arreglos asociativos que representan la informacion de los alumnos.
 */
function pedirDatos() {
    let cantDatos = parseInt(prompt("Cuantos alumnos desea registrar?"));
    let alumnos = [];

    for (let i = 0; i < cantDatos; i++) {
        let info = {};

        info["Nombre"] = prompt("Ingrese el nombre del alumno " + (i + 1));
        info["Matricula"] = prompt("Ingrese la matricula del alumno " + (i + 1));
        info["Grupo"] = prompt("Ingrese el grupo del alumno " + (i + 1));
        info["Sexo"] = prompt("Ingrese el sexo del alumno " + (i + 1));
        info["Calificacion"] = parseInt(prompt("Ingrese la calificacion del alumno " + (i + 1)));

        alumnos.push(info);
    }

    return alumnos;
}

/**
 * Calcular el promedio de las calificaciones de los alumnos recibidos.
 * 
 * @param {Array} alumnos Un arreglo con la inforamacion de los alumnos de los que se promediará la calificación
 * @returns Un numero que será el promedio de las calificaciones de los alumnos recibidos.
 */
function mediaCalificaciones(alumnos) {
    let suma = 0;

    for (let i = 0; i < alumnos.length; i++) {
        suma += alumnos[i]["Calificacion"];
    }

    return (suma / alumnos.length);
}

/**
 * Contar la cantidad de alumnos divididos por hombres y mujeres que hay dentro de los alumns recibidos.
 * 
 * @param {Array} alumnos Un arreglo con la inforamacion de los alumnos de los que se contarán divididos por genero.
 * @returns 
 */
function alumnosPorGenero(alumnos) {
    let hombres = 0;
    let mujeres = 0;

    for (let i = 0; i < alumnos.length; i++) {
        switch (alumnos[i]["Sexo"]) {
            case "Masculino":
                hombres++;
                break;
            case "Femenino":
                mujeres++;
                break;
        }
    }

    return hombres + " hombres y " + mujeres + " mujeres";
}

/**
 * Mostrar los datos de los alumnos que se desa consultar.
 * Primero se pregunta la cantidad de alumnos que se van a consultar, 
 * y después el nombre o matricula de cada uno de los alumnos.
 * Los alumnos encontrados en el arreglo recibido se mostrarán en consola, 
 * así como su división por genero y el promedio de sus calificaciones, 
 * a través del uso de las funciones anteriores.
 * 
 * @param {Array} alumnos Un arreglo con la inforamacion de los alumnos de los que se obtendrá un subConjunto.
 */
function conjuntoAlumnos(alumnos) {
    let cant = parseInt(prompt("Cuantos alumnos desea consultar?"));

    let resultado = [];

    for (let i = 0; i < cant; i++) {
        let consulta = prompt("Ingrese el nombre o matricula del alumno que desea buscar");

        for (let j = 0; j < alumnos.length; j++) {
            const alum = alumnos[j];

            if (alum["Matricula"] == consulta || alum["Nombre"] == consulta) {
                resultado.push(alum);
                break;
            }
        }
    }

    let texto = "Los alumnos encontrados son:\n";

    for (let i = 0; i < resultado.length; i++) {
        texto += resultado[i]["Nombre"];

        if (i != resultado.length - 1) { //Agregar comas entre nombre y nombre excepto al ultimo
            texto += ", ";
        }
    }

    texto += "\n" + resultado.length + " alumnos consultados\n";
    texto += alumnosPorGenero(resultado) + "\n";
    texto += mediaCalificaciones(resultado) + " media de calificaciones";

    console.log(texto);
}

/**
 * Mostrar los datos de los alumnos del grupo que se desa consultar.
 * Primero se pregunta el grupo que se desa consultar, dándole las opciones disponibles.
 * Luego, los alumnos encontrados en el arreglo recibido se mostrarán en consola, 
 * así como su división por genero y el promedio de sus calificaciones, 
 * a través del uso de las funciones anteriores.
 * 
 * Por último se presenta la opción de buscar a un alumno en especifico dentro de ese grupo, 
 * y se mostrará su información si así lo quisiera.
 * 
 * @param {Array} alumnos Un arreglo con la inforamacion de los alumnos de los que se obtendrá un subConjunto.
 */
function conjuntoGrupo(alumnos) {
    let preguntaGrupos = "Que grupo desea consultar?\n";
    let grupos = [];

    for (let i = 0; i < alumnos.length; i++) {
        let registrado = false;

        for (let j = 0; j < grupos.length; j++) {
            if (grupos[j] == alumnos[i]["Grupo"]) {
                registrado = true;
            }
        }

        if (!registrado) {
            grupos.push(alumnos[i]["Grupo"]);
            preguntaGrupos += alumnos[i]["Grupo"] + "\n";
        }
    }

    let grupo = prompt(preguntaGrupos);

    let resultado = [];

    for (let j = 0; j < alumnos.length; j++) { //Buscar a los alumnos
        const alum = alumnos[j];

        if (alum["Grupo"] == grupo) {
            resultado.push(alum);
        }
    }

    if (resultado.length == 0) {
        console.log("No se encontro el grupo " + grupo);
        return;
    }

    let texto = "Informacion del grupo " + grupo + " son:";

    texto += "\n" + resultado.length + " integrantes\n";
    texto += alumnosPorGenero(resultado) + "\n";
    texto += mediaCalificaciones(resultado) + " media de calificaciones";

    console.log(texto);

    let al = buscarAlumno(resultado);

    if (al != null) {
        console.log(al);
    } else {
        console.log("No se encontro al alumno");
    }
}

/**
 * Obtener el arreglo asociativo que representa la información del alumno consultado.
 * Primero pregunta el nombre o matricula del alumno que se desea consultar, 
 * y si es válida, devuelve el arreglo asociativo que representa la información del alumno,
 * si no, devuelve null.
 * 
 * @param {Array} alumnos Un arreglo con la inforamacion de los alumnos de los que se obtendrá un subConjunto.
 * @returns Si se encontró al alumno, un arreglo asociativo que representa la información del alumno consultado,
 * si no, null.
 */
function buscarAlumno(alumnos) {
    let consulta = prompt("Ingrese el nombre o matricula del alumno que desea buscar");

    for (let j = 0; j < alumnos.length; j++) {
        const alum = alumnos[j];

        if (alum["Matricula"] == consulta || alum["Nombre"] == consulta) {
            return alum;
        }
    }

    return null;
}
