function adicionarAmigo() {
    var nomeAmigo = document.getElementById("amigo").value;
    if (nomeAmigo.trim() !== "") { 
        var listaAmigos = document.getElementById("listaAmigos");
        var novoItem = document.createElement("li");
        novoItem.textContent = nomeAmigo;
        listaAmigos.appendChild(novoItem);
        document.getElementById("amigo").value = ""; 
    } else {
        alert("Por favor, digite um nome válido."); 
    }
}
function sortearAmigo() {
    var listaAmigos = document.getElementById("listaAmigos");
    var resultado = document.getElementById("resultado");
    var nomes = Array.from(listaAmigos.children).map(li => li.textContent); 

    if (nomes.length < 2) {
        alert("É necessário pelo menos dois amigos para o sorteio."); 
        return;
    }
    for (let i = nomes.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [nomes[i], nomes[j]] = [nomes[j], nomes[i]];
    }
    resultado.innerHTML = ""; 
    for (let i = 0; i < nomes.length; i++) {
        var itemResultado = document.createElement("li");
        var amigoSecreto = (i + 1) % nomes.length; 
        itemResultado.textContent = `${nomes[i]} tirou ${nomes[amigoSecreto]}`;
        resultado.appendChild(itemResultado);
    }
}