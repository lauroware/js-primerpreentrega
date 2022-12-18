function correr() {
  let nombreIngresado = prompt("Ingrese su nombre");
  let apellidoIngresado = prompt("Ingrese su apellido");
  let contactoIngresado = prompt("Ingrese su correo electrónico");

 ///condiocional y while:
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
 
  ///aca use el for

  for (let i = 1; i <= 3; i++) {
    let ingresarDia = prompt("Ingrese Dia disponble para hacer la conexion");

    alert("Opcion " + i + " para el día: " + ingresarDia);
  }

  ///aqui use otro condicional:

  if (resultado >= 10000) {
    alert(
      "Recuerde que por solicitiar una suscripción mayor a $ 10.000, usted podrá reclamar un celular de regalo, pronto nos contactaremos"
    );
  } else {
    alert("Pronto nos contactaremos");
  }

}

function correr1() {


    let apellido = prompt("Por favor ingrese su Apellido")
    let nombre = prompt("Por favor ingrese su Nombre")
    let contacto = prompt ("Por favor ingrese su número de teléfono")
  
    if (
        apellido != "" &&
        nombre != "" &&
        contacto != ""
      ) {
        alert(
          "Gracias por contactarnos " +
            nombre +
            "\ " +
            apellido +
            "\nPresiona siguiente para elegir un teléfono móvil"
        );
      } else {
        alert("error: Usted debe ingresar nombre, apellido y número de contacto");
        while(seguir ==! "");
      }
  
    
      class Telefono
      {
          modelo;
          gb;
          llamadas;
          seguro;
          constructor(modelo, gb, llamadas, seguro) 
          {
          this.modelo=modelo;
          this.gb=gb;
          this.llamadas=llamadas;
          this.seguro=seguro;
      }
      
      }
      
      function cargarUnTelefono ()
      { 
          let registro = new Telefono ()
          registro.modelo = prompt("Ingrese modelo de teléfono solicitado. Opciones disponibles Samsung S22 Ultra. Apple Iphone 14 PRO");
          registro.gb = prompt ("Ingrese los GB solicitados. Opciones: 5GB, 10GB, 50GB")
          registro.llamadas = prompt("Ingrese los minutos libres deseados. Opciones: 240 Minutos. 480 Minutos. 960 Minutos");
          registro.seguro = prompt("Desea asegurar? Opciones: si/no").toLowerCase();
          
  
  
          return registro;
  
      }
      
      function cargarTelefonos ()
      {    
          let registro;
          let seguir;
          do {
              registro = cargarUnTelefono();
              registrar.push (registro);
              seguir = prompt ("Desea solicitar otro celular? si/no").toLowerCase();
          }while(seguir == "si");
      
      }
      
      function mostrarRegistrar(registrar)
      {
          for (let registro of registrar) 
          console.log("Modelo: "+ registro.modelo + "Gb Solicitadas: " + registro.gb + "Minutos solicitados: " + registro.llamadas + "Seguro solicitado: " + registro.seguro)
      }
     ///use la consola para mostrar la salida.
      

      const registrar = [] 
      cargarTelefonos (registrar)
      console.log(registrar)
      mostrarRegistrar(registrar)

   
  

    const accesorios = [];
    
    class Accesorio {
      constructor (id, nombre, precio) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
      }
    }
     
    let cargarAccesorio = true;

    while (cargarAccesorio) {
      //defino los valores de los accesorios que se van a cargar
      let id_accesorio = accesorios.length + 1;
      let nombre_accesorio = prompt ("Ingrese accesorio: (disponibles: Manos Libres / Cargador / Protector)")
      let precio_accesorio = parseInt(prompt ("Ingrese precio del accesorio: (Manos Libres $ 1500 / Cargador $ 2000 / Protector $ 1500) ")) 
      //creo el producto
      let accesorio = new Accesorio (id_accesorio, nombre_accesorio, precio_accesorio);
      //agrego el accesorioa array
      accesorios.push(accesorio);
      console.log(accesorio)
      //consulto si quiero seguir cargando nuevos accesorio
      cargarAccesorio = confirm ("Desea cargar otro accesorio?")
      console.log(cargarAccesorio);

      
    }

    alert("En breve lo contactará un asesor comercial")

  }

  

  

    /*Para la entrada de datos y para ya las próximas entregas directamente quiero tener los objetos ya ingresados sin que lo ingrese la persona, no llegué a terminarlo pero dejo el codigo de lo que venía trabajando.
    const accesorios = [
      {id: 1, nombre: Cargador, precio: 4000},
      {id: 2, nombre: AuriculasBT, precio: 8000},
      {id: 3, nombre: Protector, precio: 3000},
      {id: 4, nombre: GorilaGlass, precio: 2000},
    ];
    const accesorios_carrito = [];

     class Accesorio {
      constructor (id, nombre, precio) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
      }
    }


    let cargarAccesorio = true;
    

    while (cargarAccesorio) {
      let contenido_accesorios = "";
      for (let accesorio of accesorios) {
        contenido_accesorios += accesorio.id + "- " + accesorio.nombre + " $ " + accesorio.precio + "/n"
      }
    }


  let id_accesorio = parseInt(prompt ("Seleccione el accesorio deseado: /n" + contenido_accesorios))
  
  let accesorio = buscarAccesorio (id_accesorio)
  if (
    accesorio != null) {
      accesorios_carrito.push(accesorio);
    } else {
      alert ("No existe el accesorio con ese ID")
    }

  

  console.log(accesorio);

  cargarAccesorio = confirm("Desea cargar otro accesorio?")

  function buscarAccesorio (id) {
    return accesorios.find(item => item.id === id)
  }

  console.log(accesorios_carrito)

    alert("En breve lo contactará un asesor comercial")

  
