vfunction login() {
    // 1º Acessar o valor digitado nos campos USUARIO e SENHA
    const cmapo_usuario = document.getElementById("usuario").value;
    const campo_senha = document.getElementById("senha").value;

    // 2º carregar os valores do localStorange
    const local_usuario = localStorage.getItem("usuario");
    const local_senha = localStorage.getItem("senha");

    // 3º Validar se o valores digitados são iguais aos valores armazenados no localStorage
    if (cmapo_usuario == local_usuario && campo_senha == local_senha) {
        alert("Login realizado com sucesso! 👍");
    } else {
        alert("Usuário ou senha inválidos! 👎");
    }

}


function cadastro() {

    let nome = document.getElementById("nome").value;
    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;
    let palavraPasse = document.getElementById("palavra-passe").value;

    localStorage.setItem("nome", nome);
    localStorage.setItem("usuario", usuario);
    localStorage.setItem("senha", senha);
    localStorage.setItem("palavra-passe", palavraPasse);

    window.location.href = "login.html";
}


function recuperar_senha() {

    let nomeDigitado = document.getElementById("nome").value;
    let senhaDigitada = document.getElementById("senha").value;

    let nomeArmazenado = localStorage.getItem("nome");
    let senhaArnazenada = localStorage.getItem("senha");

    let erros = Number(localStorage.getItem("erros_recuperacao"))

    if (erros >= 3) {
    alert("Você atingiu o limite de tentativas.")
    document.getElementById("nome").disabled = true;
    document.getElementById("senha").disabled = true;
    return;
    }

    if (nomeDigitado === nomeArmazenado && senhaDigitada === senhaArnazenada) {

        alert("Senha recuperada: " + senhaArmazenada);

    } else {
        erros ++;

        localStorage.setItem("erros_recuperacao", erros);

        alert("Nome ou senha incorretos. Tentativa " + erros "de 3.")

        document.getElementById ("nome").dissabled = true;
        document.getElementById ("senha").dissabled = true;

        if (erros >= 3) {
            document.getElementById("nome").disabled = true;
            document.getElementById("senha").disabled = true;
        }
    }
}


