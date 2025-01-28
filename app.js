// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// @ts-check

/** @type {string[]} */
const amigos = [];

function agregarAmigo() {
  const campoTexto = /** @type {HTMLInputElement} */ (document.getElementById('amigo'));
  const nombreAmigo = campoTexto.value.trim();

  if (nombreAmigo) {
    amigos.push(nombreAmigo);
    campoTexto.value = '';
  } else {
    alert('Por favor, inserte un nombre');
  }

  campoTexto.focus();
}
