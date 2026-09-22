// Recupera os chamados salvos no navegador.
// Caso não exista nenhum dado, começa com um array vazio.
let chamados = JSON.parse(localStorage.getItem("chamados")) || [];

// Elementos da página
const formulario = document.getElementById("formChamado");
const listaChamados = document.getElementById("listaChamados");
const filtroStatus = document.getElementById("filtroStatus");

const totalChamados = document.getElementById("totalChamados");
const chamadosAbertos = document.getElementById("chamadosAbertos");
const chamadosAndamento = document.getElementById("chamadosAndamento");
const chamadosResolvidos = document.getElementById("chamadosResolvidos");


// Salva os dados no localStorage
function salvarDados() {
    localStorage.setItem("chamados", JSON.stringify(chamados));
}


// Gera um ID para cada chamado
function gerarId() {
    return Date.now();
}


// Atualiza os números dos cards
function atualizarContadores() {

    let abertos = 0;
    let andamento = 0;
    let resolvidos = 0;

    // Estrutura de repetição
    for (let chamado of chamados) {

        if (chamado.status === "Aberto") {
            abertos++;
        } else if (chamado.status === "Em andamento") {
            andamento++;
        } else if (chamado.status === "Resolvido") {
            resolvidos++;
        }
    }

    totalChamados.textContent = chamados.length;
    chamadosAbertos.textContent = abertos;
    chamadosAndamento.textContent = andamento;
    chamadosResolvidos.textContent = resolvidos;
}


// Retorna uma classe de acordo com a prioridade
function classePrioridade(prioridade) {

    if (prioridade === "Alta") {
        return "alta";
    }

    if (prioridade === "Média") {
        return "média";
    }

    return "baixa";
}


// Retorna uma classe para o status
function classeStatus(status) {

    if (status === "Em andamento") {
        return "andamento";
    }

    if (status === "Resolvido") {
        return "resolvido";
    }

    return "aberto";
}


// Define o próximo status
function proximoStatus(status) {

    if (status === "Aberto") {
        return "Em andamento";
    }

    if (status === "Em andamento") {
        return "Resolvido";
    }

    return "Aberto";
}


// Renderiza os chamados na tela
function renderizarChamados() {

    listaChamados.innerHTML = "";

    const filtro = filtroStatus.value;

    let chamadosFiltrados = chamados;

    if (filtro !== "Todos") {
        chamadosFiltrados = chamados.filter(function(chamado) {
            return chamado.status === filtro;
        });
    }

    if (chamadosFiltrados.length === 0) {

        listaChamados.innerHTML = `
            <div class="vazio">
                <p>Nenhum chamado encontrado.</p>
            </div>
        `;

        atualizarContadores();
        return;
    }

    // Percorre os chamados e cria os elementos HTML
    chamadosFiltrados.forEach(function(chamado) {

        const elemento = document.createElement("div");
        elemento.className = "chamado";

        elemento.innerHTML = `
            <div