
function mostrarMensaje() {
    let nombreyapellido = document.getElementById("nombreyapellido").value;
    let textoError = document.getElementById("textoError");

    if (nombreyapellido == "") {
        textoError.innerHTML = "Ingrese un valor al Campo Nombre!"
    } else {
        textoError.innerHTML = "";
        let mensaje = document.createElement("div");
        mensaje.innerHTML = `<h3>${nombreyapellido}</h3>`;
        document.body.appendChild(mensaje);
    }

    let correo = document.getElementById("correo").value;
    let correoError = document.getElementById("correoError");

    if (correo == "") {
        correoError.innerHTML = "Ingrese un valor al Campo Nombre!"
    } else {
        correoError.innerHTML = "";
        let mensaje1 = document.createElement("div");
        mensaje1.innerHTML = `<h3>${correo}</h3>`;
        document.body.appendChild(mensaje1);
    }

    let velocidad = document.getElementById("velocidad").value;
    let velocidadError = document.getElementById("velocidadError");

    if (velocidad == "") {
        velocidadError.innerHTML = "Ingrese la velocidad deseada."
    } else {
        correoError.innerHTML = "";
        let mensaje3 = document.createElement("div");
        mensaje3.innerHTML = `<h3>${velocidad}</h3>`;
        document.body.appendChild(mensaje3);
    }

    let cable = document.getElementById("cable").value;
    let cableError = document.getElementById("cableError");

    if (cable == "") {
        cableError.innerHTML = "Ingrese las opciones Si O No."
    } else {
        cableError.innerHTML = "";
        let mensaje4 = document.createElement("div");
        mensaje4.innerHTML = `<h3>${cable}</h3>`;
        document.body.appendChild(mensaje4);
    }

    let bocas = document.getElementById("bocas").value;
    let bocasError = document.getElementById("bocasError");

    if (bocas == "") {
        bocasError.innerHTML = "Ingrese por favor una cantidad."
    } else {
        bocasError.innerHTML = "";
        let mensaje5 = document.createElement("div");
        mensaje5.innerHTML = `<h3>${bocas}</h3>`;
        document.body.appendChild(mensaje5);
    }

    let telefonia = document.getElementById("telefonia").value;
    let telefoniaError = document.getElementById("telefoniaError");

    if (telefonia == "") {
        telefoniaError.innerHTML = "Ingrese por favor Si o No."
    } else {
        bocasError.innerHTML = "";
        let mensaje6 = document.createElement("div");
        mensaje6.innerHTML = `<h3>${telefonia}</h3>`;
        document.body.appendChild(mensaje6);

}


console.log(
    "Bienvenido a JSON: " +
    nombreyapellido +
      " " +
      "\nVerifique su correo electrónico: " +
      correo +
      "\nVelocidad de internet seleccionada: " +
      velocidad +
      "\nDesea contratar servicio de cable: " +
      cable +
      "\nCuantos dispositivos de cablevisión conectará: " +
      bocas + 
      "\nDesea contratar servicio de telefonía movil? " +
      telefonia

  )



alert(
    "Bienvenido a JSON: " +
    nombreyapellido +
      " " +
      "\nVerifique su correo electrónico: " +
      correo +
      "\nVelocidad de internet seleccionada: " +
      velocidad +
      "\nDesea contratar servicio de cable: " +
      cable +
      "\nCuantos dispositivos de cablevisión conectará: " +
      bocas + 
      "\nDesea contratar servicio de telefonía movil? " +
      telefonia

  );

  for (let i = 1; i <= 3; i++) {
    let ingresarDia = prompt("Ingrese Dia disponble para hacer la conexion");

    alert("Opcion " + i + " para el día: " + ingresarDia);
  }

  alert("Pronto nos contactaremos")

}
