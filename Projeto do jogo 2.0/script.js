
let alunos = JSON.parse(localStorage.getItem("alunos")) || [];
let presencas = JSON.parse(localStorage.getItem("presencas")) || [];


if (alunos.length === 0) {
    alunos = [
        {
            id: 1,
            nome: "LAURA ZOLLET SILVESTRO",
            turma: "Turma 2D"
        },
        {
            id: 2,
            nome: "GABRIELI CRISTINA PIRES",
            turma: "Turma 2D"
        }
    ];

    localStorage.setItem("alunos", JSON.stringify(alunos));
}

const nomeAluno = document.getElementById("nomeAluno");
const turmaAluno = document.getElementById("turmaAluno");
const btnCadastrar = document.getElementById("btnCadastrar");

const alunoPresenca = document.getElementById("alunoPresenca");
const dataPresenca = document.getElementById("dataPresenca");
const situacao = document.getElementById("situacao");
const btnRegistrar = document.getElementById("btnRegistrar");

const listaAlunos = document.getElementById("listaAlunos");
const historico = document.getElementById("historico");

function salvarDados() {
    localStorage.setItem("alunos", JSON.stringify(alunos));
    localStorage.setItem("presencas", JSON.stringify(presencas));
}


function cadastrarAluno() {
    const nome = nomeAluno.value.trim();
    const turma = turmaAluno.value.trim();

    if (nome === "" || turma === "") {
        alert("Preencha o nome e a turma do aluno.");
        return;
    }

    const alunoExistente = alunos.some(function(aluno) {
        return aluno.nome.toLowerCase() === nome.toLowerCase();
    });

    if (alunoExistente) {
        alert("Este aluno já está cadastrado.");
        return;
    }

    const novoAluno = {
        id: Date.now(),
        nome: nome,
        turma: turma
    };

    alunos.push(novoAluno);

    salvarDados();
    atualizarTela();

    nomeAluno.value = "";
    turmaAluno.value = "";

    alert("Aluno cadastrado com sucesso!");
}


function atualizarSelectAlunos() {
    alunoPresenca.innerHTML =
        '<option value="">Selecione um aluno</option>';

    alunos.forEach(function(aluno) {
        const option = document.createElement("option");

        option.value = aluno.id;
        option.textContent = `${aluno.nome} - ${aluno.turma}`;

        alunoPresenca.appendChild(option);
    });
}


function mostrarAlunos() {
    listaAlunos.innerHTML = "";

    alunos.forEach(function(aluno) {

        const registrosAluno = presencas.filter(function(registro) {
            return registro.alunoId === aluno.id;
        });

        let quantidadePresencas = 0;
        let quantidadeFaltas = 0;

        registrosAluno.forEach(function(registro) {
            if (registro.situacao === "Presente") {
                quantidadePresencas++;
            } else {
                quantidadeFaltas++;
            }
        });

        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${aluno.nome}</td>
            <td>${aluno.turma}</td>
            <td class="presente">${quantidadePresencas}</td>
            <td class="falta">${quantidadeFaltas}</td>
            <td>
                <button class="btn-excluir"
                    onclick="excluirAluno(${aluno.id})">
                    Excluir
                </button>
            </td>
        `;

        listaAlunos.appendChild(tr);
    });
}


function registrarPresenca() {

    const alunoId = Number(alunoPresenca.value);
    const data = dataPresenca.value;
    const status = situacao.value;

    if (!alunoId || !data) {
        alert("Selecione um aluno e informe a data.");
        return;
    }

    const registroExistente = presencas.some(function(registro) {
        return registro.alunoId === alunoId &&
               registro.data === data;
    });

    if (registroExistente) {
        alert("Já existe um registro para este aluno nesta data.");
        return;
    }

    const novoRegistro = {
        id: Date.now(),
        alunoId: alunoId,
        data: data,
        situacao: status
    };

    presencas.push(novoRegistro);

    salvarDados();
    atualizarTela();

    alunoPresenca.value = "";

    alert("Presença registrada com sucesso!");
}


function mostrarHistorico() {
    historico.innerHTML = "";

    presencas.forEach(function(registro) {

        const aluno = alunos.find(function(item) {
            return item.id === registro.alunoId;
        });

        if (!aluno) {
            return;
        }

        const tr = document.createElement("tr");

        const classeSituacao =
            registro.situacao === "Presente"
                ? "presente"
                : "falta";

        tr.innerHTML = `
            <td>${aluno.nome}</td>
            <td>${formatarData(registro.data)}</td>
            <td class="${classeSituacao}">
                ${registro.situacao}
            </td>
            <td>
                <button class="btn-remover"
                    onclick="excluirRegistro(${registro.id})">
                    Remover
                </button>
            </td>
        `;

        historico.appendChild(tr);
    });
}


function formatarData(data) {
    const partes = data.split("-");

    return `${partes[2]}/${partes[1]}/${partes[0]}`;
}


function excluirAluno(id) {

    const aluno = alunos.find(function(item) {
        return item.id === id;
    });

    if (!aluno) {
        return;
    }

    const confirmar = confirm(
        `Deseja realmente excluir o aluno ${aluno.nome}?`
    );

    if (confirmar) {

        alunos = alunos.filter(function(item) {
            return item.id !== id;
        });

        presencas = presencas.filter(function(registro) {
            return registro.alunoId !== id;
        });

        salvarDados();
        atualizarTela();
    }
}


function excluirRegistro(id) {

    const confirmar = confirm(
        "Deseja remover este registro de presença?"
    );

    if (confirmar) {

        presencas = presencas.filter(function(registro) {
            return registro.id !== id;
        });

        salvarDados();
        atualizarTela();
    }
}


function atualizarTela() {
    atualizarSelectAlunos();
    mostrarAlunos();
    mostrarHistorico();
}


btnCadastrar.addEventListener("click", cadastrarAluno);

btnRegistrar.addEventListener("click", registrarPresenca);

const hoje = new Date();

const ano = hoje.getFullYear();
const mes = String(hoje.getMonth() + 1).padStart(2, "0");
const dia = String(hoje.getDate()).padStart(2, "0");

dataPresenca.value = `${ano}-${mes}-${dia}`;

atualizarTela();
