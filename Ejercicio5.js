// Array para almacenar las tareas
let tareas = [];

// Función para agregar una tarea
function agregarTarea(descripcion) {
    tareas.push({ descripcion, completada: false });
    console.log(`Tarea agregada: "${descripcion}"`);
}

// Función para marcar una tarea como completada
function marcarTareaComoCompletada(descripcion) {
    const tarea = tareas.find(t => t.descripcion === descripcion);
    if (tarea) {
        tarea.completada = true;
        console.log(`Tarea completada: "${descripcion}"`);
    } else {
        console.log(`Tarea no encontrada: "${descripcion}"`);
    }
}

// Función para listar las tareas pendientes
function listarTareasPendientes() {
    const tareasPendientes = tareas.filter(t => !t.completada);
    console.log("Tareas pendientes:");
    tareasPendientes.forEach(t => console.log(`- ${t.descripcion}`));
}

// Función para listar las tareas completadas
function listarTareasCompletadas() {
    const tareasCompletadas = tareas.filter(t => t.completada);
    console.log("Tareas completadas:");
    tareasCompletadas.forEach(t => console.log(`- ${t.descripcion}`));
}

// Ejemplo de uso:

// Agregar tareas
agregarTarea("Comprar leche");
agregarTarea("Llamar al médico");
agregarTarea("Estudiar JavaScript");
agregarTarea("Limpiar la casa");
agregarTarea("Hacer ejercicio");

// Marcar algunas tareas como completadas
marcarTareaComoCompletada("Comprar leche");
marcarTareaComoCompletada("Estudiar JavaScript");

// Listar tareas pendientes y completadas
listarTareasPendientes();
listarTareasCompletadas();
