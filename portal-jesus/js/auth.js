function login() {
  const user = document.getElementById("usuario").value;
  const pass = document.getElementById("senha").value;

  if(user === "admin" && pass === "1234") {
    localStorage.setItem("logado", "true");
    window.location.href = "admin.html";
  } else {
    alert("Usuário ou senha incorretos");
  }
}