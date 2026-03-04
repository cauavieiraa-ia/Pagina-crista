const container = document.getElementById("listaNoticias");

let noticias = JSON.parse(localStorage.getItem("noticias")) || [];

noticias.forEach((noticia, index) => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <img src="${noticia.imagem}">
    <h3>${noticia.titulo}</h3>
    <p>${noticia.conteudo}</p>
    <button onclick="mostrarComentarios(${index})">Comentários</button>
    <div id="comentarios-${index}"></div>
  `;

  container.appendChild(card);
});