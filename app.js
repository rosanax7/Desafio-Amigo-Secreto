var amigos = []; 
function adicionarAmigo() {
    var nomeAmigo = document.getElementById("amigo").value;
    if (nomeAmigo.trim() === "") {
        
        alert("Por favor, insira um nome.");
        return;
    }
    if (!/^[a-zA-Z\u00C0-\u017F\s]+$/.test(nomeAmigo)) {
    // if (!/^[a-zA-Z\s]+$/.test(nomeAmigo)) 
        alert("Por favor, insira apenas letras.");
        return;
    }
    for (var i = 0; i < amigos.length; i++) {
        if (amigos[i].toLowerCase() === nomeAmigo.toLowerCase()) {
            alert("Este nome já foi adicionado.");
            return;
        }
    }
    amigos.push(nomeAmigo); 
    document.getElementById("amigo").value = ""; 
    exibirAmigos(); 
}
function exibirAmigos() {
    var listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; 
    for (var i = 0; i < amigos.length; i++) {
        var novoItem = document.createElement("li");
        novoItem.textContent = amigos[i];
        listaAmigos.appendChild(novoItem);
    }
}
function sortearAmigo() {
    if (amigos.length < 2) {
      alert("Adicione pelo menos dois nomes para realizar o sorteio.");
      return;
    }
    var amigosEmbaralhados = [...amigos]; 
    for (let i = amigosEmbaralhados.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        while (j === i) {
        j = Math.floor(Math.random() * (i + 1));
        }
        [amigosEmbaralhados[i], amigosEmbaralhados[j]] = [amigosEmbaralhados[j], amigosEmbaralhados[i]];
    }
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
      var amigo = amigos[i];
      var amigoSecreto = amigosEmbaralhados[i];
      var resultadoItem = document.createElement("li");
      resultadoItem.textContent = amigo + " tirou: " + amigoSecreto;
      resultado.appendChild(resultadoItem);
    }
  }










