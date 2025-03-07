// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// ------------------------------------------------------------------------
let amigos = [];
// función para agregar un amigo a la lista
function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo");
    let nombre = nombreAmigo.value.trim(); //eliminar espacios en blanco

    //validación
    if (nombre === "") {
        alert("Por favor, debe ingresar un nombre.");
        return;
    }

    //agregar el nombre al array si no está repetido
    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido ingresado anteriormente.");
        return;
    }

    amigos.push(nombre); //agregar al array

    //actualizar lista en pantalla
    actualizarListaAmigos();

    //limpiar el campo de entrada
    nombreAmigo.value = "";
}

//función para actualizar la lista de amigos en pantalla
function actualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; //limpiar la lista antes de que esta se actualice

    amigos.forEach((amigo) => {
        let item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

//función para sortear a solo un amigo secreto
function sortearAmigo() {
    //validar que existan amigos
    if (amigos.length < 2) {
        alert("Deben existir al menos dos nombres de amigos para realizar el sorteo.");
        return;
    }

    //seleccionar un amigo aleatoriamente
    let amigoAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[amigoAleatorio];

    //mostrar el resultado del amigo elegido de forma aleatoria
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<p>🎉 ¡El amigo secreto que ha salido es: <strong>${amigoSorteado}</strong>! 🎁</p>`;
}