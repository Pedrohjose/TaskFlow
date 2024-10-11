const webpages = [document.querySelector(`[data-tipo="registro"]`)]; // Criando uma array que armazena os tipos de páginas

// Utilizando uma condição para confirmar o tipo da página, de modo a executar o subsequente evento
if (webpages[0] && document.querySelector("h2").textContent === "Sign up") {
  document.querySelector("form").addEventListener("submit", (f) => {
    if (!checarSenhas()) f.preventDefault();
  });
}

// Criando uma função para checar as senhas digitadas
function checarSenhas() {
  const senha = document.getElementById("senha").value;
  const confirmarSenha = document.getElementById("confirmar-senha").value;

  if (senha !== confirmarSenha) return false;
}
