import { conectaApi } from "./conectaApi.js";
const formulario = document.querySelector("[data-formulario]");

async function criarProduto(evento) {
    evento.preventDefault();

    const url = document.querySelector("[data-url]").value;
    const nome = document.querySelector("[data-nome]").value;
    const preco = Math.floor(Math.random() * 10).toString();

    try {

    await conectaApi.criaProduto(nome, preco, url);

} catch (e) {
    alert(e);
}
 window.location.reload(true);

}

// evento para enviar as informações inseridas somente após clicar o botão de submit
formulario.addEventListener("submit", evento => criarProduto(evento))