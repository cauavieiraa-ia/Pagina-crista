function mostrarComentarios(index) {
  const area = document.getElementById(`comentarios-${index}`);
  let comentarios = JSON.parse(localStorage.getItem("comentarios")) || {};

  area.innerHTML = `
    <input type="text" id="comentario-${index}" placeholder="Escreva um comentário">
    <button onclick="adicionarComentario(${index})">Enviar</button>
    <div>${(comentarios[index] || []).join("<br>")}</div>
  `;
}

function adicionarComentario(index) {
  let comentarios = JSON.parse(localStorage.getItem("comentarios")) || {};
  const texto = document.getElementById(`comentario-${index}`).value;

  if(!comentarios[index]) {
    comentarios[index] = [];
  }

  comentarios[index].push(texto);

  localStorage.setItem("comentarios", JSON.stringify(comentarios));
  mostrarComentarios(index);
}