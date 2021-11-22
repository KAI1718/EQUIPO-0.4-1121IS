var prestamos = [];

menu();

function menu() {
    var opcion = prompt("Que desea realizar?\n"
        + "1. Pagar prestamo\n"
        + "2. Registrar prestamo\n"
        + "3. Consultar prestamos\n"
        + "4. Salir"
    );

    switch (opcion) {
        case "1":
            pagarPrestamo();
            break;
        case "2":
            registrarPrestamo();
            break;
        case "3":
            consultarPrestamo();
            break;
        case "4":
            alert("Salir");
            return;
        default:
            alert("Opcion no valida");
            break;
    }

    menu();
}

function pagarPrestamo() {
    let nombre = prompt("Ingrese el nombre del cliente que desea pagar");

    for (let i = 0; i < prestamos.length; i++) {
        let prest = prestamos[i];

        if (prest["nombre"] == nombre) {
            let plazos = 0;
            do {
                plazos = parseInt(prompt("Cuantos plazos quiere pagar?\n"
                    + "Recuerde que por cada plazo se pagarán " + prest["cantidadAPagar"] + " pesos"));
            } while (plazos > (prest["plazos"] - prest["pagados"]));

            let cantidad = (prest["cantidadAPagar"] * plazos);
            let pago = 0;

            alert("La cantidad a pagar es de " + cantidad);

            do {
                pago = parseInt(prompt("Ingrese la cantidad con la que va a pagar"));

                if (cantidad > pago) {
                    alert("Debe pagar al menos " + cantidad + " pesos");
                }
            } while (cantidad > pago);

            alert("Su cambio es de " + (pago - cantidad));

            prest["pagados"] += plazos;
            prest["cantidad"] -= (prest["pagados"] * prest["cantidadAPagar"]);

            if (prest["pagados"] == prest["plazos"]) {
                alert("Felicidades\nEl prestamo ha sido pagado");

                prestamos.splice(i, 1);
            } else {
                alert("Gracias, le restan " + prest["cantidad"] + " pesos por pagar");
            }
            break;
        }
    }
}

function registrarPrestamo() {
    let nombre = prompt("Ingrese el nombre del cliente");
    let cantidad = parseInt(prompt("Cuanto dinero quieres pedir?"));
    let plazos = parseInt(prompt("En cuantos plazos vas a pagar?"));
    let cantidadAPagar = cantidad / plazos;

    prestamos.push({
        "nombre": nombre,
        "cantidad": cantidad,
        "cantidadAPagar": cantidadAPagar,
        "pagados": 0,
        "plazos": plazos
    });

    alert("El prestamo ha sido registrado con los siguientes datos:\n"
        + "Nombre :" + nombre + "\n"
        + "Cantidad :" + cantidad + "\n"
        + "Plazos :" + plazos + "\n"
        + "Cantidad a pagar por plazo:" + cantidadAPagar
    );
}

function consultarPrestamo() {
    let nombre = prompt("Ingrese el nombre del cliente que desea consultar");

    for (let i = 0; i < prestamos.length; i++) {
        let prest = prestamos[i];

        if (prest["nombre"] == nombre) {
            alert("El cliente " + prest["nombre"] + " tiene un prestamo de " + prest["cantidad"] + "\n"
                + "Debe pagar " + prest["cantidadAPagar"] + " por cada plazo\n"
                + "Ha pagado " + prest["pagados"] + " de " + prest["plazos"] + " plazos\n"
                + "Aun tiene " + prest["cantidad"] + " pesos por pagar");
        }
    }
}
