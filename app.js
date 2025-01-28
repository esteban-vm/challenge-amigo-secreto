// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// @ts-check

/** @type {string[]} */
const amigos = [];
const lista = /** @type {HTMLUListElement} */ (document.getElementById('listaAmigos'));

function agregarAmigo() {
  const campoTexto = /** @type {HTMLInputElement} */ (document.getElementById('amigo'));
  const nombreAmigo = campoTexto.value.trim();

  if (nombreAmigo) {
    amigos.push(nombreAmigo);

    actualizarAmigos();

    campoTexto.value = '';
  } else {
    alert('Por favor, inserte un nombre');
  }

  campoTexto.focus();
}

function actualizarAmigos() {
  lista.innerHTML = '';

  for (const amigo of amigos) {
    const item = document.createElement('li');
    item.textContent = amigo;
    lista.appendChild(item);
  }
}

function sortearAmigo() {
  const numeroAmigos = amigos.length;

  if (numeroAmigos > 0) {
    const indiceAleatorio = Math.floor(Math.random() * numeroAmigos);
    const amigoAleatorio = amigos[indiceAleatorio];
    const resultadoElemento = /** @type {HTMLUListElement} */ (document.getElementById('resultado'));

    lista.innerHTML = '';
    resultadoElemento.innerHTML = amigoAleatorio;
  }
}
