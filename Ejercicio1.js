// Función para obtener y mostrar los nombres y correos electrónicos de los usuarios
async function obtenerUsuarios() {
    try {
        // Haciendo la petición GET a la API
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        // Verificando si la respuesta fue exitosa
        if (!response.ok) {
            ('Error al obtener los usuarios');
        }
        
        // Convirtiendo la respuesta a JSON
        const usuarios = await response.json();

        // Iterando sobre la lista de usuarios
        usuarios.forEach(usuario => {
            console.log(`Nombre: ${usuario.name}, Email: ${usuario.email}`);
        });
    } catch (error) {
        // Manejo de errores
        console.error('Hubo un problema con la solicitud:', error);
    }
}

// Llamando a la función
obtenerUsuarios();