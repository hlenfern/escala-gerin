function adicionarEscala() {
    let nome = document.getElementById("nome").value;
    let turno = document.getElementById("turno").value;
    let data = document.getElementById("data").value;
    
    if (nome && turno && data) {
        let tabela = document.getElementById("escala-body");
        let linha = tabela.insertRow();
        
        let celula1 = linha.insertCell(0);
        let celula2 = linha.insertCell(1);
        let celula3 = linha.insertCell(2);
        let celula4 = linha.insertCell(3);

        celula1.textContent = nome;
        celula2.textContent = turno;
        celula3.textContent = new Date(data).toLocaleDateString("pt-BR");

        // Criando botão de remover
        let botaoRemover = document.createElement("button");
        botaoRemover.textContent = "Remover";
        botaoRemover.classList.add("remover");
        botaoRemover.onclick = function () {
            linha.remove();
        };

        celula4.appendChild(botaoRemover);

        // Limpar campos após adicionar
        document.getElementById("nome").value = "";
        document.getElementById("turno").value = "";
        document.getElementById("data").value = "";
    } else {
        alert("Por favor, preencha todos os campos!");
    }
}
