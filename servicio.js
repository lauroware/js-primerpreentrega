// Esto lo tome de Boostrap para hacer validaciones
(() => {
    'use strict'
  
    const forms = document.querySelectorAll('.needs-validation')
  
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()


// formulario para pedir servicio

const guardarServicio =() => {
        let nombreyapellido = document.getElementById("nombreyapellido").value;
        let correo = document.getElementById("correo").value;
        let velocidad = document.getElementById("velocidad").value;
        let telefonia = document.getElementById("telefonia").value;
        let cable = document.getElementById("cable").value;
        let diaAlta = document.getElementById("diaAlta").value;
        let diaAlternativo = document.getElementById("diaAlternativo").value;
        const servicio = {nombreyapellido, correo, velocidad, cable, telefonia, diaAlta, diaAlternativo};
        localStorage.setItem("servicio", JSON.stringify(servicio))



  alert("Estimado " + nombreyapellido + " sus datos han sido guardados, presione verificar y asegúrese que la información ingresada sea correcta y luego, presione enviar. Muchas gracias")


  console.log(
    "Bienvenido a JSON: " +
    nombreyapellido
  )


}

// Esta es la salida del localstorage

const verificarServicio = () => {
    const servicio = JSON.parse(localStorage.getItem("servicio"));
    let salida = `<p>Verifique que todos los campos estén completos y sean correctos:</p>
    <p>Nombre y apellido: <b>${servicio.nombreyapellido}</b><br>
    Email: <b>${servicio.correo}</b><br>
    Velocidad seleccionada: <b>${servicio.velocidad}</b><br>
    Contratará servicio de cable?: <b>${servicio.cable}</b><br>
    Contratará servicio de telefonía?: <b>${servicio.telefonia}</b><br>
    Día para instalación del servicio: <b>${servicio.diaAlta}</b><br>
    Día alternativo: <b>${servicio.diaAlternativo}</b><br>
    </p>`;
    document.getElementById("salida").innerHTML = salida;
    console.log("Verifique sus datos!");
}

document.getElementById("boton1").addEventListener("click", guardarServicio)
document.getElementById("boton2").addEventListener("click", verificarServicio)


//aqui agrego setTImeout 

const btn = document.querySelector("#boton2");
const popup = document.querySelector("#popup_mensaje")

btn.addEventListener ("click", () => {
  popup.classList.add("alert", "alert-danger")
  popup.innerText = "vericando datos"
  

  setTimeout(() => {
    popup.classList.remove("alert-danger");
    popup.classList.add("alert-sucess");
    popup.innerText = "Los datos han sido verificados, si son correctos puede solicitar el servicio."
  }, 3000);
}

  ) ;



/* utilice una libreria para el boton nos enviar, aunque no tiene configurada la función */

function nosContactaremos () {
Swal.fire(
  'Pronto nos contactaremos',
  'Puede cerrar la página.',
  'success'
)
}

document.getElementById("boton3").addEventListener("click", nosContactaremos)











    
    










