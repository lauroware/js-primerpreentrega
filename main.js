

const renderProductos= () => {
    const productos = cargarProductosLS();
    let salida = "";
  
    for (let producto of productos) {
        salida += `<div class="container text-center col-md-3 mb-3">
            <div class="row align-items-start card text-center border border-0">
                <img src="imagenes/${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">U$${producto.precio}</p>
                <a href="#" class="btn btn-dark" onClick="agregarAlCarrito(${producto.id});">Agregar al Carrito</a>
                </div>
            </div>
        </div>`;
    }
  
    document.getElementById("productos").innerHTML = salida;
  }
  
  
  renderProductos ();
  renderBotonCarrito();

 