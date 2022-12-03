function correr() {
  let nombreIngresado = prompt("Ingrese su nombre");
  let apellidoIngresado = prompt("Ingrese su apellido");
  let contactoIngresado = prompt("Ingrese su correo electrónico");

  if (
    nombreIngresado != "" &&
    apellidoIngresado != "" &&
    contactoIngresado != ""
  ) {
    alert(
      "Bienvenido: " +
        nombreIngresado +
        " " +
        apellidoIngresado +
        "\nVerifique su correo electrónico: " +
        contactoIngresado +
        "\nEn el próximo paso cotizaremos el servicio"
    );
  } else {
    alert("error: Usted debe ingresar nombre, apellido y contacto");
    while (seguir == !"");
  }

  let velocidadIngresado = parseInt(
    prompt(
      "Ingrese valor de la velocidad seleccionada: $ 1.500 (256 MB) $ 2.000 (512MB)"
    )
  );
  let serviciodecableIngresado = parseInt(
    prompt("Desea incluir servicio de cable? (Valor $ 2.500)")
  );
  let serviciotelefonicoIngresado = parseInt(
    prompt("Desea incluir servicio de telefonía? (Valor $ 1.000)")
  );
  let cantidaddispositivosIngresado = parseInt(
    prompt("ingrese cantidad de dispositivos conectados al cable")
  );
  let resultado;

  function sumaServicio(
    velocidadIngresado,
    serviciodecableIngresado,
    serviciotelefonicoIngresado
  ) {
    resultado =
      velocidadIngresado +
      serviciotelefonicoIngresado +
      serviciodecableIngresado * cantidaddispositivosIngresado;
    return resultado;
  }

  resultado = sumaServicio(
    velocidadIngresado,
    serviciodecableIngresado,
    serviciotelefonicoIngresado,
    cantidaddispositivosIngresado
  );
  alert("El valor de suscripción mensual es:" + "\n" + resultado);

  for (let i = 1; i <= 3; i++) {
    let ingresarDia = prompt("Ingrese Dia disponble para hacer la conexion");

    alert("Opcion " + i + " para el día: " + ingresarDia);
  }

  if (resultado >= 10000) {
    alert(
      "Recuerde que por solicitiar una suscripción mayor a $ 10.000, usted podrá reclamar un celular de regalo, pronto nos contactaremos"
    );
  } else {
    alert("Pronto nos contactaremos");
  }
}
