// Definir el array de productos
const productos = [
    { nombre: "Taladro", precio: 250, categoria: "Herramientas" },
    { nombre: "Escritorio", precio: 400, categoria: "Muebles" },
    { nombre: "Celular", precio: 1200, categoria: "Electrónica" },
    { nombre: "Aire acondicionado", precio: 1500, categoria: "Electrodomésticos" },
    { nombre: "Martillo", precio: 50, categoria: "Herramientas" },
    { nombre: "Lámpara", precio: 120, categoria: "Iluminación" },
    { nombre: "Refrigerador", precio: 2000, categoria: "Electrodomésticos" }
];

// Seleccionar una categoría específica para filtrar
const categoriaSeleccionada = "Electrodomésticos";

// Filtrar los productos por la categoría seleccionada
const productosFiltrados = productos.filter(producto => producto.categoria === categoriaSeleccionada);

// Crear un array con los nombres de los productos filtrados
const nombresProductosFiltrados = productosFiltrados.map(producto => producto.nombre);

// Calcular el precio total de los productos filtrados
const precioTotal = productosFiltrados.reduce((total, producto) => total + producto.precio, 0);

// Mostrar los resultados en la consola
console.log("Productos filtrados:", productosFiltrados);
console.log("Nombres de los productos filtrados:", nombresProductosFiltrados);
console.log("Precio total de los productos filtrados:", precioTotal);