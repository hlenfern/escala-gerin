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

        let botaoRemover = document.createElement("button");
        botaoRemover.textContent = "Remover";
        botaoRemover.classList.add("remover");
        botaoRemover.onclick = function () {
            linha.remove();
            salvarEscalas();  
        };

        celula4.appendChild(botaoRemover);

        salvarEscalas();

        document.getElementById("nome").value = "";
        document.getElementById("turno").value = "";
        document.getElementById("data").value = "";
    } else {
        alert("Por favor, preencha todos os campos!");
    }
}

function salvarEscalas() {
    let escalas = [];
    const tabela = document.getElementById("escala-body");
    
    for (let i = 0; i < tabela.rows.length; i++) {
        let nome = tabela.rows[i].cells[0].textContent;
        let turno = tabela.rows[i].cells[1].textContent;
        let data = tabela.rows[i].cells[2].textContent;
        escalas.push({ nome, turno, data });
    }

    localStorage.setItem("escalas", JSON.stringify(escalas));
}

function carregarEscalas() {
    let escalas = JSON.parse(localStorage.getItem("escalas")) || [];
    let tabela = document.getElementById("escala-body");

    escalas.forEach(escala => {
        let linha = tabela.insertRow();
        
        let celula1 = linha.insertCell(0);
        let celula2 = linha.insertCell(1);
        let celula3 = linha.insertCell(2);
        let celula4 = linha.insertCell(3);

        celula1.textContent = escala.nome;
        celula2.textContent = escala.turno;
        celula3.textContent = escala.data;

        let botaoRemover = document.createElement("button");
        botaoRemover.textContent = "Remover";
        botaoRemover.classList.add("remover");
        botaoRemover.onclick = function () {
            linha.remove();
            salvarEscalas();  
        };

        celula4.appendChild(botaoRemover);
    });
}

window.onload = carregarEscalas;
