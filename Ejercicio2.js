
function consultarBaseDeDatos() {
    return new Promise((resolve, reject) => {
      // Simula un retraso de 3 segundos
        setTimeout(() => {
            // Genera un número aleatorio
            const numeroAleatorio = Math.floor(Math.random() * 10); // Entre 0 y 9
            console.log(`Número generado: ${numeroAleatorio}`);
            
            // Si el número es par, resuelve la promesa, si es impar, la rechaza
            if (numeroAleatorio % 2 === 0) {
                resolve("Consulta exitosa");
            } else {
                reject("Error en la consulta");
            }
        }, 3000);
    });
}

// Llamada a la función y manejo de la promesa
consultarBaseDeDatos()
    .then((mensaje) => {
        console.log(mensaje);
    })
    .catch((error) => {
        console.error(error);
    });