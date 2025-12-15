// 3. Manejo de asincronía con Callbacks
// Ejercicio:
// Crear una función llamada procesarPedido que simule un pedido de comida con un setTimeout de 3 segundos y que reciba un callback para mostrar un mensaje final, por ejemplo: “Pedido entregado”.
// Meta: comprender la ejecución diferida.

function procesarPedido(callback) {
	console.log("Pedido Recibido.");

	setTimeout(() => {
		const msj = "Pedido Entregado.";
		callback(msj);
	}, 3000);
}

procesarPedido((mensaje) => {
	console.log(mensaje);
});

console.log("Preparando la Comida...");