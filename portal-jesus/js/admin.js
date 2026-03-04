if(localStorage.getItem("logado") !== "true") {
  window.location.href = "login.html";
}

function salvarNoticia() {
  const titulo = document.getElementById("titulo").value;
  const imagem = document.getElementById("imagem").value;
  const conteudo = document.getElementById("conteudo").value;

  const noticia = { titulo, imagem, conteudo };

  let noticias = JSON.parse(localStorage.getItem("noticias")) || [];
  noticias.push(noticia);

  localStorage.setItem("noticias", JSON.stringify(noticias));

  alert("Notícia publicada!");
}

function logout() {
  localStorage.removeItem("logado");
  window.location.href = "index.html";
}