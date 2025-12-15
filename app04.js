// 4. Encadenamiento de Callbacks (Callback Hell controlado)
// Ejercicio:
// Crear tres procesos consecutivos (por ejemplo: tomar datos → procesar datos → mostrar resultado), cada uno con un setTimeout, y enlazarlos mediante callbacks.
// Meta: mostrar la complejidad que aparece cuando las tareas dependen unas de otras.

function tomarDatos(callback) {
    setTimeout(() => {
        console.log("Tomando datos...");
        callback();
    }, 1000);
}

function procesarDatos(callback) {
    setTimeout(() => {
        console.log("Procesando datos...");
        callback();
    }, 1000);
}

function mostrarResultado(callback) {
    setTimeout(() => {
        console.log("Mostrando resultado...");
        callback();
    }, 1000);
}

tomarDatos(() => {
    procesarDatos(() => {
        mostrarResultado(() => {
            console.log("Proceso completado.");
        });
    });
});

console.log("Encadenamiento de CallBacks");
