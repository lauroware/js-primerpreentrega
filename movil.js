

const productos = [
    {id:1, nombre:"Samsung S21 Ultra", memoria:256, precio:900, imagen:"S21 ultra.webp", categoria:"celulares"},
    {id:2, nombre:"iPhone 14 Pro", memoria:512, precio:1400, imagen:"iphone14pro.webp", categoria:"celulares"},
    {id:3, nombre:"Manos libres Samsung", memoria:0, precio:900, imagen:"Manos libres samsung.webp", categoria:"accesorios"},
    {id:4, nombre:"Motorola Edge 30", memoria:256, precio:600, imagen:"motorola edge 30.webp", categoria:"celulares"},
    {id:5, nombre:"Xiaomi Mi 12T Pro", memoria:256, precio:900, imagen:"xiaomi.webp", categoria:"celulares"},
    {id:6, nombre:"Samsung Galaxy Z Fold 4", memoria:256, precio:100, imagen:"zflip.webp", categoria:"celulares"},
    {id:7, nombre:"DJI Osmo Mobile 3", memoria:0, precio:700, imagen:"estabilizador dji.webp", categoria:"accesorios"},
    {id:8, nombre:"Auriculares Inalámbricos JBL", memoria:0, precio:100, imagen:"auriculares jblV.webp", categoria:"accesorios"},
    ];
  
  const guardarProductosLS = (productos) => {
    localStorage.setItem("productos", JSON.stringify(productos));
  }
  
  const cargarProductosLS = () => {
    return JSON.parse(localStorage.getItem("productos")) || [];
  }
  
  guardarProductosLS(productos);

  console.log(productos);
  
  