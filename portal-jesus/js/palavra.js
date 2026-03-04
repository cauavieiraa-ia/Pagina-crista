const versiculos = [
  "O Senhor é o meu pastor, nada me faltará. - Salmos 23:1",
  "Tudo posso naquele que me fortalece. - Filipenses 4:13",
  "Porque Deus amou o mundo de tal maneira... - João 3:16",
  "Entrega o teu caminho ao Senhor. - Salmos 37:5"
];

const hoje = new Date().getDate();
const indice = hoje % versiculos.length;

document.getElementById("versiculo").innerText = versiculos[indice];const noticiasPadrao = [
  {
    titulo: "Grande Conferência Jovem reúne milhares",
    imagem: "https://images.unsplash.com/photo-1507692049790-de58290a4334",
    conteudo: "Evento cristão reúne jovens para momentos de adoração e palavra."
  },
  {
    titulo: "Projeto social ajuda famílias carentes",
    imagem: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    conteudo: "Igreja local distribui alimentos e oferece apoio espiritual."
  },
  {
    titulo: "Novo álbum gospel lançado",
    imagem: "https://images.unsplash.com/photo-1497032205916-ac775f0649ae",
    conteudo: "Cantor gospel lança novo projeto musical que já é sucesso."
  }
];

if(!localStorage.getItem("noticias")) {
  localStorage.setItem("noticias", JSON.stringify(noticiasPadrao));
}

const container = document.getElementById("listaNoticias");
let noticias = JSON.parse(localStorage.getItem("noticias"));

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